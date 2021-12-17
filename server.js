// require files for use
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");

// initiate server
const PORT = process.env.PORT || 3001;
const app = express();



// standard codes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// create routes
app.use("/", htmlRoutes);


// set up the port
app.listen(3001, () => {
});