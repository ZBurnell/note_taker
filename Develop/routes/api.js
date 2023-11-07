//dependencies
const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

//GET for reading the notes added to db.json file
router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));

        res.send(data)
    })
})

//POST for adding new notes to db.json file
router.post('/api/notes', (req, res) => {
    let newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    }
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;

        let newData = JSON.parse(data);

        newData.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {
            if (err) throw err;

            res.send('Your note has been added successfully');
        })
    });

})

module.exports = router;