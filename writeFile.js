var fs=require("fs");
fs.writeFile("hello.js","hello node.js",function(error){
	if(error){
		console.log(error);
		return ;
	}
	console.log("数据写入成功")
})