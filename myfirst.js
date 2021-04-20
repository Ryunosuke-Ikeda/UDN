var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {origins:'localhost:* 127.0.0.1:8124'});
//var io = require('socket.io')(server, {origins:'http://localhost:8124'});
server.listen(8124);

const path = require('path');

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/oekaki/index.html');
});

io.sockets.on('connection', function (socket) {

    // クライアントからメッセージ受信
    socket.on('clear send', function () {

        // 自分以外の全員に送る
        socket.broadcast.emit('clear user');
    });

    // クライアントからメッセージ受信
    socket.on('server send', function (msg) {

        // 自分以外の全員に送る
        socket.broadcast.emit('send user', msg);
    });

    // 切断
    socket.on('disconnect', function () {
        io.sockets.emit('user disconnected');
    });
});

app.use(express.static(path.join(__dirname, '/oekaki')));//chat_roomディレクトリを公開
console.log("Server started at port: " + 8124);
