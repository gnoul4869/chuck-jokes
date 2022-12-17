1. Install necessary tools (ESLint, Stylelint, SCSS, Axios, React Router)
2. Add initial files (fonts, images)
3. Create a global store to hold all the global variables.
4. The jokes loaded from the API have to be remapped for better utilizing. Jokes that don't have a category will be categorized as "uncategorized", and add like and dislike properties
5. Create components to utilize:
    1. JokeCard: Used to display a single joke
    2. CategoryList: Used to display all the category as options
    3. JokeList: Used to display all the joke cards. Category options and pagination will be used here
    4. SearchBar: Used to search for the specific joke. Will first display a list of matched jokes then the user has to click it to go to the joke detail page (This will be done automatically if there is only one matched joke)
    5. TopJokeList: Used to display top 10 jokes with most likes (This will be used in DetailPage)
6. Create pages to utilize:
    1. MainPage: Used to display as main page of the application
    2. DetailPage: Used to display single joke and all of it's details
7. The styling will be done accordingly when implementing each feature.
