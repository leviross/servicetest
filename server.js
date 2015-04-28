var express = require('express');
var bodyParser = require('body-parser');

var exp = express();
exp.use(bodyParser.urlencoded({ extended: true }));
exp.use(express.static(__dirname + '/public'));
exp.use(bodyParser.json());
exp.use(bodyParser.json({ type: 'application/vnd.api+json'}));

var port = process.env.PORT || 3030;
var router = express.Router();

router.get('*', function(req, res){
    res.sendfile('./public/index.html');
});

exp.listen(port);
console.log('Listening on port 3030');
