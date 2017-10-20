/* GET home page. */
module.exports.index= function(req, res, next){
    res.render('index', { title: 'Express' });
}




/*var respuesta;
googleMapsClient.geolocate({}, function(err, response) {
    if (!err) {
        respuesta= response;
    } else {
        respuesta= err;
    }
})*/