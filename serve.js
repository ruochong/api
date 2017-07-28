var express = require('express');
var app = express();
var redis = require("redis");
var client = redis.createClient();
var count=0;
var bodyParser=require('body-parser')
app.get('/', function (req, res) {
    count++;
    client.set('time',count);
    client.get('time', function (err,reply) {
        res.send(reply);
    })

})
var un=bodyParser.urlencoded({extended:false})
app.post('/student',un, function(req, res) {
    //console.log(req.body.iii);
    if(toString(req.body.name).length>==10){
        console.log('error');

    }
    client.hmset('name',req.body)
    //res.send(req.body.iii);
    // client.set(req,req.query.id);
    // client.set('value',req.query.value);
     client.hgetall('mame',function (err,reply){
         res.send(reply);
     })

})
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

// 不使用默认连接方式时，使用如下方式创建客户端：
// const client = redis.createClient({host:'localhost', port:6379, password:'myPassword'});

// 如果想要选择第3个而不是第0个(默认)的数据库，调用方式如下：
// client.select(3, function() { /* ... */ });

/*client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});*/