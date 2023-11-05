const express = require('express');
const path = require('path');

// Initialize Express.js
const app = express();

// Server port location
const PORT = process.env.PORT || 3000;

// Middleware for routes
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/db/notes', require('./routes/db'));
app.use('/', require('./routes/html'));


// listening for incoming port connections 
app.listen(PORT, () =>
  console.log(`Server is listening at port ${PORT}`)
);
