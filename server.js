// require files for use
const express = require("express");

// initiate server
const PORT = process.env.PORT || 3001;
const app = express();



// standard codes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// create routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// set up the port
app.listen(PORT, () => {
    console.log("API is now set to your local port")
});