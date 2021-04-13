var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, {origins:'localhost:* 127.0.0.1:8124'});
server.listen(8124);
 
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
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