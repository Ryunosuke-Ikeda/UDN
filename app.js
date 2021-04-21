/*
// S01. 必要なモジュールを読み込む
var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');
// S02. HTTPサーバを生成する
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
}).listen(3000);  // ポート競合の場合は値を変更
*/
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {origins:'localhost:* 127.0.0.1:3333'});
server.listen(3333);

const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/oekakiChat/index.html');
});


// S03. HTTPサーバにソケットをひも付ける（WebSocket有効化）
//var io = socketio.listen(server);

// S04. connectionイベントを受信する
io.sockets.on('connection', function(socket) {
    var room = '';
    var name = '';

    // roomへの入室は、「socket.join(room名)」
    socket.on('client_to_server_join', function(data) {
        room = data.value;
        socket.join(room);
    });
    // S05. client_to_serverイベント・データを受信する
    socket.on('client_to_server', function(data) {
        // S06. server_to_clientイベント・データを送信する
        io.to(room).emit('server_to_client', {value : data.value});
    });

    // S07. client_to_server_broadcastイベント・データを受信し、送信元以外に送信する
    socket.on('client_to_server_broadcast', function(data) {
        socket.broadcast.to(room).emit('server_to_client', {value : data.value});

    });

    //oekaki
    // クライアントからメッセージ受信
    socket.on('clear send', function () {

        // 自分以外の全員に送る
        //socket.broadcast.emit('clear user');
        socket.broadcast.to(room).emit('clear user');
    });
    //////

    // S08. client_to_server_personalイベント・データを受信し、送信元のみに送信する
    socket.on('client_to_server_personal', function(data) {
        var id = socket.id;
        name = data.value;
        var personalMessage = "あなたは、" + name + "さんとして入室しました。"
        io.to(id).emit('server_to_client', {value : personalMessage});
    });

    //oekaki
    // クライアントからメッセージ受信
    socket.on('server send', function (msg) {

        // 自分以外の全員に送る
        //socket.broadcast.emit('send user', msg);
        socket.broadcast.to(room).emit('send user', msg);
    });
    /////////

    // S09. dicconnectイベントを受信し、退出メッセージを送信する
    socket.on('disconnect', function() {
        if (name == '') {
            console.log("未入室のまま、どこかへ去っていきました。");
        } else {
            var endMessage = name + "さんが退出しました。"
            io.to(room).emit('server_to_client', {value : endMessage});
        }
    });
});
app.use(express.static(path.join(__dirname, '/oekakiChat')));//chat_roomディレクトリを公開
