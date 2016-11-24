var http = require('http');		//引入http模块
var url = require("url")
var querystring = require("querystring")
var fs = require("fs")
var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res){
  res.statusCode = 200;	//相应状态码
  res.setHeader('Content-Type', 'text/plain'); //相应头
  var value = querystring.parse(url.parse(req.url).query);
  if(value.username == "wangdawei"){
  		fs.readFile("vip.txt",function(error,data){
  			if(error){
  				console.log(value.username + "传输信息出错");
  				return;
  			}
			res.end(data);	//响应主体,并且结束响应函数
  		})
  }
  else{
  	res.end('Hello normal\n');	//响应主体,并且结束响应函数
  }
  console.log(value.username + "进入了网站")
});
server.listen(port);
console.log("Server running at http://" + hostname + ":" + port)