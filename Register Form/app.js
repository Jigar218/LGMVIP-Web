const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const path = require("path");

const connectdb = require("./server/database/connection");
const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//mongodb connection
connectdb();

//parse request to bodyparser
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.set('views', path.join(__dirname, 'views'));

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css"))); //css/style.css
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//routes
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
