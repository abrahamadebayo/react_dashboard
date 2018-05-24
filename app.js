var express = require('express');
var app = express();
app.use(express.static('main'));
app.use(function (req, res) {
    res.sendFile(__dirname + '/main/index.html');
});
app.listen(8333, function () {
    console.log('Read_APi is Using port 8333! With Express Js');
});