const express = require('express');
const uuid = require('uuid');
const router = express.Router();

let data = require('../db/db.json');

router.get('/', (req, res) => res.json(data));


router.post('/', (req, res) => {
    const { id, title, text } = req.body;
          
    if (id && title && text) {
        const newNote = {
        id: uuid(),
        title,
        text,
    };
        data.push(newNote);
        res.json(data);
    
    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting note');
  }
});


module.exports = router;