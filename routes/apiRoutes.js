// require files
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { currentNotes } = require("../db/db.json");
const { uuid } = require('uuidv4');
const deleteById = require("../utils/utilities");

// routes
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});

router.post("/notes", (req, res) => {
    const { title, text } = req.body
    const newNote = {
        title,
        text,
        id: uuid()
    };


    fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) =>{
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(parsedNotes), (err) => {
            if(err) throw err;
            console.log("Notes updated!");
        });
    });

    res.sendFile(path.join(__dirname, "../db/db.json"));
});


// This is my attempt at a delete route. I actually spent over an hour with TAs trying to work on this, but they didn't do much to help. I've left it in here in case I want to include it at a later date. I've been told "I'm close". Who knows.
// router.delete("/notes", (req, res) => {
//     console.log("handling delete");
    
//     fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
//         const parseNotes = JSON.parse(data);
//         console.log(req);
//     })

// })





// export for use
module.exports = router;