var http = require("http");
var url = "http://www.imooc.com/learn/348";
var cheerio = require("cheerio");

var database = [];

function trim(str) {
	str = str.replace(/\ +/g, ""); //去掉空格
    str = str.replace(/[ ]/g, "");    //去掉空格
    str = str.replace(/[\r\n]/g, ""); //去掉回车换行
	return str;
}

function insertDate(file,data){
	var fs = require("fs");
	
	fs.readFile(file,function(err,oldData){
		if(err){
			return;
		}
		var t = oldData.toString();
		fs.writeFile(file,t + data.toString(),function(error){
			if(error){
				return;
			}	
		})
	})	
}

http.get(url,function(res){
	var html = "";
	res.on("data",function(data){
		html += data;
	})
	res.on("end",function(){
		var $ = cheerio.load(html);
		var chapters = $(".chapter");
		for(var i = 0 ; i < chapters.length;i++){
			var obj = {
				title:"",
				chapter:[]
			}

			chapters.eq(i).find(".chapter-info").remove();
			var chapters = $(".chapter");

			var title = trim(chapters.eq(i).find("strong").text());

			
			for(var j = 0; j < chapters.eq(i).find(".J-media-item").length; j++){
				var chapter = trim(chapters.eq(i).find(".J-media-item").eq(j).text());
				chapter = chapter.replace("开始学习","");
				obj.chapter.push(chapter);
			}
			obj.title = title;
			database.push(obj);
		}

		console.log(database)
	})
})