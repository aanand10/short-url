# Short URL Project

Welcome to the Short URL project! This project is a simple URL shortening service built with Node.js, Express.js, ejs and MongoDB. It allows users to shorten long URLs and access them through shorter, more manageable links.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Views](#views)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Short URL project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/aanand10/short-url.git
   cd short-url
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up MongoDB:**

   Make sure you have MongoDB installed and running on your machine. By default, the application connects to a MongoDB instance at `mongodb://127.0.0.1:27017/short-url`. You can change the connection string in the `connectToMongoDB` function if needed.

4. **Run the application:**

   ```sh
   npm start
   ```

   The server will start on port 1010.

## Usage

Once the server is running, you can access the application in your web browser at `http://localhost:1010`.

### Endpoints

- `GET /`: Serve static files and homepage.
- `POST /url`: Create a new shortened URL.
- `GET /:shortUrl`: Redirect to the original URL based on the shortened URL.
- `GET /url/analytics/:shortID`: Get analytics for a specific short URL.

## Using the Postman Collection

To make it easier to test the API endpoints, you can utilize the provided Postman collection.

### Importing the Postman Collection

1. Download the `short-url.postman_collection.json` file from the repository.
2. Open Postman and click on the **Import** button.
3. Select the **File** tab and choose the downloaded JSON file.
4. Click **Import** to add the collection to Postman.

### Using the Collection

1. Open the imported collection in Postman.
2. You will find pre-configured requests for each API endpoint.
3. If needed, update any request details (such as URL, headers, or request body).
4. Click **Send** to test the endpoints.

## Routes

### URL Routes

- **POST /url**

  Create a new shortened URL. The request body should include the original URL to be shortened.

  ```json
  { "url": "https://google.com" }
  ```

