// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set up the body parser
app.use(bodyParser.json());

// Create an array to store the comments
const comments = [];

// Create a POST route to add a comment
app.post('/comments', (req, res) => {
  // Get the comment from the request
  const comment = req.body.comment;
  // Add the comment to the comments array
  comments.push(comment);
  // Send a response
  res.send('Comment added');
});

// Create a GET route to get all comments
app.get('/comments', (req, res) => {
  // Send the comments array as a JSON response
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});