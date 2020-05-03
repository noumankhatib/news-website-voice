const express = require("express")
const mongoose = require("mongoose")
const routes = require("./router") // new

const bodyParser = require("body-parser") // new
const Catagory = require("./model/schema")
var db = 'mongodb://localhost:8880/catagory'//db name catagory

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    const app = express()
    app.use(bodyParser.json()) // new
    app.use("/api", routes)

    app.listen(5000, () => {
      console.log("Server has started!")
    })
  })