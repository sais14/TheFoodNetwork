# The Food Network


## Available Scripts

In the project directory, you can run:

npm start & node server.js from the main directory, and uvicorn main:app --reload within /backend to run the application

## Inspiration
We are hoping to answer the age-old question: "What should we eat?" It's a question that often leaves people feeling stuck, and we wanted to create an app that makes meal planning simple, personalized, and a way to connect to their community.

## What it does
The Food Network allows users to upload a picture of their kitchen or pantry. Using GPT-powered image recognition, the app identifies available ingredients and suggests personalized recipes with fun cultural facts based on user preferences, dietary restrictions, and allergies. It also recommends meals that other users with similar preferences are cooking, fostering a sense of community by helping people discover popular dishes, try new cultural cuisines, and connect through shared tastes. We wanted to create a groundbreaking application that not only enhances meal planning but also connects users with diverse culinary cultures.

To make decision-making easier, the app uses Stable Diffusion to visualize the recipe suggestions. This visualization is particularly important because, while you often hear the names of different cuisines, it can be hard to know what the dishes actually look like or what to expect. By showing users a visual preview of the recipes, the app helps them feel more confident in their choices and introduces them to new cuisines in a more engaging way, by transforming recipe information into a more usable and accessible format for users.

We believe that through shared culinary experiences, we can build a more connected, culturally aware community!

## How we built it
We built The Food Network with a React frontend for a smooth, interactive user experience. We chose MongoDB to handle data storage, ensuring scalability and speed for user preferences and recipe suggestions.

The image recognition is powered by GPT, and we used Perplexity API calls to create personalized recipe recommendations based on ingredients in users' fridges, helping users explore dishes from various cultures and discover meals they might not otherwise have considered.

Utilizing Perplexity allowed us to make it easy to generate culturally rich and actionable recipe ideas, revolutionizing decision-making in the kitchen. We also used Stable Diffusion to generate recipe visuals and incorporated a recommendation system using an autoencoder neural network paired with k-nearest neighbors.

We also utilize Auth0 for login user authentication due to its scalability, as we are a social platform so we want to be sure we can support many users securely.

## Challenges we ran into
One of the major challenges we faced was training Stable Diffusion locally, which took a significant amount of time and extended the testing and iteration process. This experience taught us the importance of leveraging cloud-based infrastructure for greater scalability and efficiency, enabling faster development and smoother model training.

Accomplishments that we're proud of
We are particularly proud of our recommendation system! Our goal was to make food an avenue for users to explore and connect with different cultures, and we achieved this by not only personalizing recipes for each user but also recommending meals that others with similar tastes and preferences have enjoyed. By combining an autoencoder neural network with k-nearest neighbors for vector dimensionality reduction, we were able to create a system that suggests recipes based on shared interests between users. This allows users to discover new cuisines and cultural dishes that they might not have otherwise considered!

## What we learned
We learned the importance of planning and prototyping early because we ran into a few challenges with our initial idea and had to pivot.

On the technical side, we gained hands-on experience with Perplexity API calls for personalized recipe suggestions and deepened our understanding of training AI models for the stable diffusion.

## What's next for The Food Network
Looking ahead, we plan to expand the social aspects of the platform by introducing a follower/influencer model. This would allow users to follow others for meal inspiration and share their cooking experiences, further building a community around food and recipes. We also hope to add more preference features, such as level of cooking skill, etc.
