// express module
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// Express router to mount phrasebook related functions on.
var router = express.Router();
var Users = require('../models/user.js');


mongoose.connect('localhost:27017/phrasebookVocab');
var phrasebookSchema = new mongoose.Schema({
  esphrase: String,
  enphrase: String
});

var phrasebookModel = mongoose.model('phrasebookModel', phrasebookSchema);

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
  console.log('phrasebookObjects get call');
  phrasebookModel.find().then(function(results){
    res.send(results);
  });
}); // end router get


router.post('/', function(req, res) {
  console.log('phrasebookObjects url hit', req.body);
  var phrasesToAdd = {
    esphrase: req.body.esphrase,
    enphrase: req.body.enphrase
  };
  var newPhrases = phrasebookModel(phrasesToAdd);
  newPhrases.save();
  res.send('Hi');
}); // end router post

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  phrasebookModel.remove({
    _id: id
  }).then(function(){
    res.sendStatus(200);
  });
}); // end router delete

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var phrasesToAdd = {
    esphrase: req.body.esphrase,
    enphrase: req.body.enphrase,
  };
  console.log(id);
  phrasebookModel.findByIdAndUpdate(
    { _id: req.user.id},
    { $set: {
      esphrase: req.body.esphrase,
      enphrase: req.body.enphrase
    }},
    function(err, data) {
      if(err) {
        console.log('remove error:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
}); // end router put

module.exports = router;
