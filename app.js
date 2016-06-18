var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public/'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index_node.html'));
});
app.post('/userdata', function(req, res) {
    //console.log(req.body);
    var users = JSON.parse(fs.readFileSync('./register.json', 'utf8'));
    var count = 0;
   // fs.readFileSync('./register.json','utf8');
    for (var j = 0; j < users.length; j++) {
        if (req.body.name === users[j].name) {
            res.send(users[j].materia);
        } else {
            count++;
        }
    }
    if (count == users.length) {
        var user = {
            name: req.body.name,
            id: req.body.id,
            materia: {
                redbean: 0,
                greenbean: 0,
                taro: 0
            }
        };
        users.push(user);
        fs.writeFileSync('./register.json', JSON.stringify(users, null, '\t'), 'utf8');
        res.send({
            redbean: 0,
            greenbean: 0,
            taro: 0
        });
    }
});
app.post('/materia_num', function(req, res) {
    var users = JSON.parse(fs.readFileSync('./register.json', 'utf8'));
    for (var j = 0; j < users.length; j++) {
        if (req.body.name === users[j].name) {
            users[j].materia.redbean = req.body.redbean;
            users[j].materia.greenbean = req.body.greenbean;
            users[j].materia.taro = req.body.taro;
            fs.writeFile('./register.json', JSON.stringify(users, null, '\t'), 'utf8', function(err) {
                if (err) console.log(err);
                else {
                    console.log("saved!");
                }
            });
        }
    }
});
app.listen(8800, function() {
    console.log('Server is run!');
});
