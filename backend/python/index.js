const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRouter = require("./router/apiRouter.js");
const path = require("path");
require("dotenv").config(
    {
        path: path.join(__dirname, ".env")
    }
);

require("./database/mongoDB.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
const corsoptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
};

app.use(cors(corsoptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hilex server running successfully!");
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Hilex app listening on port ${PORT}`);
});
