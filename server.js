const express = require('express');
const path = require('path');

// Server port location
const PORT = process.env.PORT || 3001;

// Initialize Express.js
const app = express();

const api = require('./Develop/routes/api.js');
const html = require('./Develop/routes/html.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(api);
app.use(html);

// listening for incoming port connections 
app.listen(PORT, () =>
  console.log(`Server is listening at port ${PORT}`)
);
