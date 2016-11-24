var http=require("http");
var url="http://www.imooc.com/learn/348";
var cheerio=require("cheerio");

http.get(url,function(response){
		var html="";
		response.on('data',function(data){
			html += data;
		})
		response.on('end',function(){
			console.log(html);
		})
})