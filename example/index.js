// require jsfiddle api
var JSFiddleApi = require ("../index");

// get this fiddle
JSFiddleApi.getFiddle ("ehrudxo/kwvrxpz0/", function (err, fiddleObj) {

    // handle error
    if (err) { return console.log (err); }

    // output the response
    console.log(fiddleObj)
});
