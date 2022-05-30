//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// console.log(date());


const app = express();

const items = ["Buy Food", "Cook", "Eat"];
// let items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  // let today = new Date();
  //
  // let options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long"
  // };
  //
  // let day = today.toLocaleDateString("en-US", options); //Monday - Sunday

  // let day = date.getDay();
  const day = date.getDate();


  res.render("list", {
    listTitle: day,
    newListItems: items
  }); //find file name list, and passing the day variable into kindOfDay
});

app.post("/", function(req, res) {

  const item = req.body.newItem;

  if(req.body.list === "Work") {
    workItems.push(item);
    res.redirect("Work");
  } else {
    items.push(item);
    res.redirect("/"); //redirect to the home
  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems});
});

app.post("/work", function(req, res) {
  const item = req.body.newListItems;
  workItems.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
