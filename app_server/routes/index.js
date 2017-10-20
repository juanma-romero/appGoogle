var express = require('express');
var router = express.Router();
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCpI1dm4HaiIrP5v4B9SNtQ6xdJxNlhwWs'
  });
var ctrlMain = require('../controllers/main');





/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;



