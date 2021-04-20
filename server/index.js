const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
//import router
var postRouter = require("./routes/posts");

const app = express();
dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Hello to memories API");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
    else {
      console.log(`connecting to port ${PORT}`);
      app.listen(PORT);
    }
  }
);
