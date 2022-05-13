# Assignment 1 - ReactJS app.

Name: Salome Keidia

## Overview.

this repository features web api, where a sign out, sign in and sign up is integrated with the react app.
it has a protected route on the recommendations page so it can only be viewed when logged in.


### Features.
+ added sign up page with api route
+ added login page with api route
+ added a protected route to the recommend page
+ added a proxy router package json
+ added authentication functionality

## Setup requirements.

an env file might be required. run the movies api folder for the log in to work along with mongod and mongo

## API endpoints.


+ sign up - /signup
+ sign in - /login
added the trending, recommend and recent tmdb endpoints to the movies api

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ //login
/signup


[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

recommend and favourites page

## API Configuration

create an `.env` file 
______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret

REACT_APP_TMDB_KEY=b267e71297bef4a2b953bc453157cd12
FAST_REFRESH=false

______________________

## API Design 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 


## Security and Authentication

added a protected route to recommend and favourites page
added authentication contexts

## Integrating with React App

i used the movies api by npm starting it in its own directory which made me able to log in into my react app

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
