//dependencies
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = require('express').Router();
const db = ('./Develop/db/db.json');

//GET for reading the notes added to db.json file
app.get('/api/notes', (req, res) => {
    fs.readFile(db, (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));

        res.send(data)
    })
})

//POST for adding a new note to the db.json file
app.post('/api/notes', (req, res) => {
    let newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    }
   
    //Callback to read information in the db.json file
    fs.readFile(db, (err, data) => {
        if (err) throw err;

        let newData = JSON.parse(data);
        newData.push(newNote);

        //Callback to push new information the db.json file
        fs.writeFile(db, JSON.stringify(newData), (err) => {
            if (err) throw err;

            res.send('your new note has been added successfully!');
        })
    });

})

module.exports = app;