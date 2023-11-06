const express = require('express');
const path = require('path');

// Initialize Express.js
const app = express();

// Server port location
const PORT = process.env.PORT || 3001;

// Middleware for routes
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/notes', require('./Develop/routes/api.js'));
app.use('/', require('./Develop/routes/html.js'));


// listening for incoming port connections 
app.listen(PORT, () =>
  console.log(`Server is listening at port ${PORT}`)
);
