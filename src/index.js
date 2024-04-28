// console.log("hello");

const express = require("express");
const app = express();
// const quotes = require("./quotes.json");
const userRouter = require("./routes/userRoute");
const noteRouter = require("./routes/noteRoute");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());


app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("WELCOME TO NOTES API");
});

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server started on port : " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
// app.get("/quote", (req, res) => {
//   res.status(200).json(quotes);
// });

// app.get("/random", (req, res) => {
//   let index = Math.floor(Math.random() * quotes.length);
//   let quote = quotes[index];
//   res.status(200).json(quote);
// });
