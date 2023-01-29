# Tree Node Project Beta

Beta project that starts with a "root" factory and the user manually generates an unlimited amount of child node factories. Those child factories can in turn generate a set of up to 15 random numbers.\
Site not currently published, you will need to fork the code and play around with it on localhost.

## Current Features

-A child generator where when the "Generate Child" button is clicked, will generate a random number of 0-15 children within a factory

-A factory generator where when the "+ Add Factory" button is clicked, will generate a single factory. Button can be clicked as many time as wanted. Will also generate setting buttons with each factory but these are not currently active.

-Backend can be accessed by going to `localhost:7000` in your browser when running backend.
-`localhost:7000` or `localhost:7000/` will return "Server Running"
-`localhost:7000/login` will return "Login Page"
-`localhost:7000/login/fetchLogin` will return "Register New User"

## Root Directory Scripts

In the project root folder, you can run:

### `npm run both`

When run within root folder, runs backend and frontend concurrently using "concurrently" npm package.\
Backend server set to run on port 7000.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you save changes on frontend or backend using nodemon.\
You may also see any lint errors in the console.

### `npm start`

Changes directory into the frontend folder and opens the  app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Frontend Folder Scripts

In the project frontend folder, you can run:

### `npm start`

Opens the  app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Backend Folder Scripts

In the project backend folder, you can run:

### `npm run dev`

Starts the server on port 7000.\
Uses "nodemon" npm package to automatically stop and restart the server.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm start`

Starts the server on port 7000.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page doesn't reload, you'll need to stop and start server again.\
You may also see any lint errors in the console.