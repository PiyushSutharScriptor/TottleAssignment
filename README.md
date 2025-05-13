# Topic Retrieval API
This is a simple Node.js and Express-based API that allows users to search for topics from a local JSON file. 
It mimics a small catalogue API, similar to TOTLE’s /api/catalogue/ endpoint. The project supports search and optional sorting features.

# Project Structure
The project contains two main files:
- A JSON file (topics.json) that acts as a data source.
- An Express server file (index.js) that handles API logic.

# Getting Started
- Create a new project folder and initialize a Node.js project using npm.

# Install Express as a dependency
- Create a folder called data, and inside that, place a file named topics.json with at least five sample topics.
- Create an index.js file at the root to set up the API server.
- Implement the /api/topics endpoint to accept query parameters and return filtered results based on the search keyword.

# How the API Works
- The API exposes a single GET endpoint: /api/topics.
- It accepts a query parameter called search to filter topics by name.
- Filtering is done in a case-insensitive manner.
- An optional query parameter sort=name can be added to sort the results alphabetically by topic name.
- If the search query is missing or invalid, the API responds with a 400 error.
- If there's a server error (like the file can't be read), it responds with a 500 error.

# Testing with Postman
Three cases were tested using Postman:
- A valid search query returns matching topics.
- A valid search query with sort=name returns alphabetically sorted results.
- An invalid request with no search query returns a 400 Bad Request with an error message.

# Features Implemented
- Input validation for the search parameter
- File reading using Node’s file system
- Filtering and case-insensitive comparison
- Optional sorting using a query parameter
- Proper HTTP status codes for success and error cases

# Repository Link
https://github.com/PiyushSutharScriptor/TottleAssignment

# Video Link 
https://drive.google.com/file/d/18k-4clf6eHSjvPPlAmwCAnINMTwiGYH-/view?usp=sharing
