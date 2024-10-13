import os
import base64
import shutil
from openai import OpenAI
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

client = OpenAI(api_key="")
PPLX_API_KEY = ""

dietary_restrictions = "vegan, gluten-free"
expertise_level = "beginner"
preferred_cuisine = "Indian"
additional_restrictions = "no nuts, low spice"

allowed_ingredients = [
    'Milk', 'Eggs', 'Butter', 'Cheddar cheese', 'Mozzarella cheese', 'Yogurt',
    'Cream cheese', 'Sour cream', 'Mayonnaise', 'Mustard', 'Ketchup',
    'Salad dressing', 'Pickles', 'Olives', 'Bacon', 'Ham', 'Chicken',
    'Ground beef', 'Beef steaks', 'Pork chops', 'Ground turkey', 'Tofu',
    'Almond milk', 'Soy milk', 'Coconut milk', 'Orange juice', 'Apple juice',
    'Lemon juice', 'Garlic', 'Onions', 'Tomatoes', 'Spinach', 'Lettuce',
    'Carrots', 'Broccoli', 'Cauliflower', 'Celery', 'Red bell peppers',
    'Green bell peppers', 'Yellow bell peppers', 'Mushrooms', 'Zucchini',
    'Cucumbers', 'Green beans', 'Asparagus', 'Russet potatoes',
    'Sweet potatoes', 'Corn', 'Peas', 'Brussels sprouts', 'Avocados',
    'Strawberries', 'Blueberries', 'Raspberries', 'Blackberries', 'Apples',
    'Grapes', 'Lemons', 'Limes', 'Oranges', 'Pineapple', 'Bananas',
    'Hard-boiled eggs', 'Cottage cheese', 'Hummus', 'Salsa', 'Guacamole',
    'Pesto', 'BBQ sauce', 'Soy sauce', 'Hot sauce', 'Worcestershire sauce',
    'Fish sauce', 'Hoisin sauce', 'Peanut butter', 'Jam', 'Jelly', 'Honey',
    'Maple syrup', 'Salted butter', 'Unsalted butter', 'Margarine', 'Heavy cream',
    'Whipped cream', 'Raw shrimp', 'Cooked shrimp', 'Salmon', 'Tilapia', 'Tuna',
    'Cooked rice', 'Cooked pasta', 'Tortillas', 'Pizza dough', 'Turkey deli meat',
    'Roast beef deli meat', 'Sausages', 'Hot dogs', 'Pepperoni', 'Fresh parsley',
    'Fresh cilantro'
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.makedirs("uploads", exist_ok=True)

def filter_ingredients(ingredients, allowed_ingredients):
    return [
        ingredient for ingredient in ingredients.split(', ')
        if any(allowed.lower() in ingredient.lower() for allowed in allowed_ingredients)
    ]

@app.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
    try:
        file_location = f"uploads/{file.filename}"
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        with open(file_location, "rb") as image_file:
            encoded_image = base64.b64encode(image_file.read()).decode('utf-8')

        messages = [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": "Can you list out all of the ingredients on 1 line?"},
                    {
                        "type": "image_url",
                        "image_url": {"url": f"data:image/png;base64,{encoded_image}"}
                    },
                ]
            }
        ]

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            max_tokens=300
        )

        ingredients = response.choices[0].message.content.strip()
        print(f"Extracted Ingredients: {ingredients}")
        filtered = filter_ingredients(ingredients, allowed_ingredients)

        return JSONResponse({"ingredients": filtered})

    except Exception as e:
        print(f"Error: {str(e)}")
        return JSONResponse({"error": f"Failed to extract ingredients: {str(e)}"}, status_code=500)

@app.post("/generate-recipe/")
async def generate_recipe_endpoint(payload: dict):
    try:
        content = generate_recipe(
            PPLX_API_KEY,
            payload["ingredients"],
            allowed_ingredients,
            payload["dietary_restrictions"],
            payload["expertise_level"],
            payload["preferred_cuisine"],
            payload["additional_restrictions"]
        )
        return JSONResponse({"recipe": content})
    except Exception as e:
        print(f"Error generating recipe: {str(e)}")
        return JSONResponse({"error": f"Failed to generate recipe: {str(e)}"}, status_code=500)

def generate_recipe(pplx_api_key, ingredients, allowed_ingredients, dietary_restrictions, expertise_level,
                    preferred_cuisine, additional_restrictions):
    client = OpenAI(api_key=pplx_api_key, base_url="https://api.perplexity.ai")

    allowed_ingredients_str = ', '.join(allowed_ingredients)

    prompt = (
        f"""
        Start by giving a title for the recipe and a quick couple-word "motto-like" text for the dish.
        Provide a {dietary_restrictions}, {preferred_cuisine} recipe for a {expertise_level} chef using these ingredients: {', '.join(ingredients)}. 
        Make sure the recipe follows these additional restrictions: {additional_restrictions}. 
        Only use ingredients from this list: {allowed_ingredients_str}. Even if an ingredient is in the photo, do not include it in the recipe unless it is in this list.
        Give the recipe in a simple step-by-step format with no introductions, no outro, no markdown formatting, no bolding.
        Add some cultural insight in reference to the {preferred_cuisine} at the end.
        Don't add any additional introductory or concluding text, just the ingredients and recipe.
        Output only plain text. Do not output markdown.
        Don't suggest ingredients that are not in the {allowed_ingredients_str}.
        """
    )

    messages = [
        {"role": "system", "content": "You are a professional chef providing recipes."},
        {"role": "user", "content": prompt},
    ]

    try:
        response = client.chat.completions.create(
            model="llama-3.1-sonar-small-128k-chat",
            messages=messages
        )
        content = response.choices[0].message.content.strip()
        print(f"Generated Recipe: {content}")
        return content
    except Exception as e:
        print(f"Error generating recipe: {e}")
        raise
