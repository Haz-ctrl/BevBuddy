const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware
const { log } = require('console');
const mimeTypes = require('mime-types'); // Import the mime-types library

app.use(bodyParser.urlencoded({ extended: false }));

// // Define the catch-all route for serving static files
// app.get('/static/:file', (req, res) => {
//   const fileName = req.params.file;
//   const filePath = __dirname + '/static/' + fileName;
//   const mimeType = mimeTypes.lookup(fileName);

//   if (mimeType) {
//     res.setHeader('Content-Type', mimeType);
//   }

//   res.sendFile(filePath);
// });

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
  });
  
app.post('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
console.log(__dirname + '/register.html');