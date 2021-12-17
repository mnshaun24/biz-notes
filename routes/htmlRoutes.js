// require files
const path = require("path");
const router = require("express").Router();

// set up paths
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


// export the file for use
module.exports = router;