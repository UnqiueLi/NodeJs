var http = require("http");
var cheerio = require("cheerio");
var fs = require("fs")
var n = 5;

function trim(str) {
	str = str.replace(/\ +/g, ""); //去掉空格
	str = str.replace(/[ ]/g, ""); //去掉空格
	str = str.replace(/[\r\n]/g, ""); //去掉回车换行
	return str;
}
function getData() {
	var database = [];
	var url = "http://www.imooc.com/learn/" + n;
	http.get(url, function(res) {
		var html = "";
		res.on("data", function(data) {
			html += data;
		})
		res.on("end", function() {
			var $ = cheerio.load(html);
			var chapters = $(".chapter");
			for (var i = 0; i < chapters.length; i++) {
				var obj = {
					title: "",
					chapter: []
				}
				chapters.eq(i).find('.chapter-info').remove();
				var chapters = $(".chapter");
				var title = trim(chapters.eq(i).find("strong").text());

				for (var j = 0; j < chapters.eq(i).find('.J-media-item').eq(j).text(); j++) {
					chapter = chapter.replace("开始学习", "");
					obj.chapter.push(chapter);
				}
				   obj.title = title;
			       database.push(obj);
			}
			fs.writeFile("data"+n+".txt",JSON.stringify(database),function(error){
				if(error){
					console.log("写入"+n+"文件失败");
					return ;
				}
				console.log("写入"+n+"文件成功");
				console.log("继续寻找"+(++n)+"数据");
				getData();
			})
		})
	})
}
getData();