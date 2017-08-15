//requires
// var watsonCredentials = require('./watsonCredentials');
var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

//object defined
// var text_to_speech = new TextToSpeechV1({
//   username: watsonCredentials.username,
//   password: watsonCredentials.password
// });

//post request
router.post('/', function(req, res) {
  console.log(req.body.text);

  var params = {
    text: req.body.text,
    voice: 'en-US_AllisonVoice',
    accept: 'audio/wav'
  };

  text_to_speech.voice(params, function(error, voice) {
    if (error)
      console.log('Error:', error);
    else
      console.log(JSON.stringify(voice, null, 2));
  });

  // Pipe the synthesized text to a file.
  text_to_speech.synthesize(params).on('error', function(error) {
    console.log('Error:', error);
  }).pipe(fs.createWriteStream('public/soundfiles/emergency.wav'));

  res.send('something');
});

// get request
router.get('/', function(req, res) {
  console.log('phrases get call');
    phrasebookModel.find({
      userId: req.user._id
    }).then(function(results) {
      res.send(results);
    });  // end router get

});

module.exports = router;
