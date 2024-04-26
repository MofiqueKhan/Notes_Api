// console.log("hello");

const express = require("express");
const app = express();
// const quotes = require("./quotes.json");
const userRouter = require("./routes/userRoute");
const noteRouter = require("./routes/noteRoute");

const mongoose = require("mongoose");

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(
    "mongodb+srv://admin:123moffu@cluster0.3xniivi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("server started on port : 5000");
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
