// require files for use
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");

// initiate server
const PORT = process.env.PORT || 3001;
const app = express();

// create routes
app.use("/", htmlRoutes);

app.use(express.static("public"));


// set up the port
app.listen(3001, () => {
});