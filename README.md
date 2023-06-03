# unsplash-images
Unsplash images, consumed react-query, Unsplash API and axios.

## React Gallery Project

This is a simple image gallery project built with React and Unsplash API.

## Description

This project uses the Unsplash API to search for images based on a user-provided query. It leverages the `react-query` library for data fetching, and `axios` for making HTTP requests.

## Features

1. **Search Functionality**: The user can search for any image they want using a search input.

2. **Error Handling**: The application gracefully handles errors and loading states, giving appropriate feedback to the user.

3. **React Context**: The application uses React's Context API for managing global state.

## Project Setup

To get the project up and running, follow these steps:

1. Clone the repository to your local machine.
2. Install the project dependencies by running `npm install` or `yarn install`.
3. Create a `.env` file in the root directory of the project and add your Unsplash API key as `VITE_API_KEY=your-api-key-here`.
4. Run the project using `npm start` or `yarn start`.

## Code Overview

The main component of the project is `Gallery.jsx`. This component uses `react-query` to fetch data from the Unsplash API based on the user's search query. It also handles different states like loading, error, and no results found. 

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
