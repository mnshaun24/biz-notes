// require files
const router = require("express").Router();
const path = require("path");
const fs = require("fs");

// routes
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});

router.post("/notes", (req, res) => {
    const { title, text } = req.body
    const newNote = {
        title,
        text,
        id: uuidv4()
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



// add delete method and match url
// need to dynamically put an id into the URL  ":id"
// read the db file and parse the notes to work with them
// after read -> handle delete by id (think for loop). this does in read and before write
// then write back to db file
// send updated db to front end 




// export for use
module.exports = router;