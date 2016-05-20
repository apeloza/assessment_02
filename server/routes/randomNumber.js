var express = require('express');
var router = express.Router();

router.get('/', function (req, res){

  var randomNumber = function(min, max){
          return Math.floor(Math.random() * (1 + max - min) + min);
      };
      var number = randomNumber(1, 100).toString();
      res.send(number);
});


module.exports = router;
