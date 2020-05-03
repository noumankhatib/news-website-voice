const express = require('express')
const router = express.Router()
const Catagory = require("./model/schema")

router.put('/create', function(req, res, next) {
  var cataogoryObject = new Catagory({ username: 'Nouman', catagory:["politic","techonology"]})
  // save model to database
  
  cataogoryObject.save(function (err, Catagory) {
    if (err) return console.error(err);
    console.log(Catagory.name + " saved to collection.");
  });
 });
router.get('/fetch:id', function(req, res, next) {
  Catagory.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})
 
router.post("/fetch", async (req, res) => {
  Catagory.findById({name:"nouman"}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
       console.log(result)
      res.send(result);
    }
  });
})
module.exports = router