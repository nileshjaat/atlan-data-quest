# Atlan Data Quest

A Redux based web application built in ReactJS that executes predefined SQL queries over a table `users` to display the result to user.

## Overview

Users can type their SQL query in the input field or can `copy to clipboard` a query from accordion where some available queries are given. After hitting the `EXECUTE` button result will be immediately displayed from a `JSON "users" data` and it changes the state of the applicaton according to each query with the `Redux state management` to Data Grid section.
It contains users' data according to queries. Data Grid provides `pagination` as well as `rows per page` features by default.

## Framework and Dependencies

    Framework: React

    Dependencies/packages-
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.14.9",
    "@mui/material": "^5.14.9",
    "@mui/x-data-grid": "^6.14.0",
    "react-hot-toast": "^2.4.1",
    "react-redux": "^8.1.2",
    "redux": "^4.2.1",
    "redux-thunk": "^2.4.2"

## Available Queries

`SELECT * from users;`

`SELECT * from users where gender="Male";`

`SELECT * from users where gender="Female";`

`SELECT * from users where id BETWEEN 250 AND 475;`

## Features

- Standard Interface and Features: On the right side of the navigation bar, users have the option to switch between a light and dark theme. Below this, there is an accordion menu containing a list of available queries. Users can easily copy any of these queries to their clipboard. Further down, there is a text editor where users can input their chosen query to retrieve associated results. Lastly, the results section displays the executed data in a table format, equipped with filtering, searching, sorting, and column toggling features for effortless data manipulation.
- Redux State Management: Redux is employed for state management, facilitating query execution and contributing to the application's agility and exceptional speed.
- Responsive Design: This app is completely responsive for all devices.

## Performance

Page load time of the application on localhost - 2.3s (measured with lighthouse by google in chrome dev tools)

## Optimisations

- This large load time is due to the dummy data in the codebase and if we can fetch this data from a server then the application will be loaded much faster.
- Redux: As per the official documentation of React Redux, `React Redux in particular is heavily optimized to cut down on unnecessary re-renders.` I tried to management all the query cases of SQL using Redux. It also makes codebase easy to understand and improves readability.

## Deployment

Deployed using Netlify. Check the link: https://atlan-data-quest.netlify.app/
