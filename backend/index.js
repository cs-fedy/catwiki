const express = require("express");
const { port } = require("./constants");
const cors = require("cors");
const routes = require("./routes/index");

const app = express();
app.use(express.json());
app.use(cors());

// route: 
app.use("/api", routes);

app.listen(port, err => {
    if (err) throw err;
    console.log(`listening on port ${port}`);
});