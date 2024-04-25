// console.log("hello");

const express = require("express");
const app = express();
const quotes = require("./quotes.json")

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/quote" , (req , res)=>{
    res.status(200).json(quotes)
})

app.get("/random" , (req , res)=>{
  let index = Math.floor(Math.random() * quotes.length);
  let quote = quotes[index];
  res.status(200).json(quote);
})

app.listen(5000, () => {
  console.log("server started on port : 5000");
});
