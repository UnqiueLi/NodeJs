var fs=require("fs");
fs.writeFile("text.txt","hello node.js",function(error){
	if(error){
		console.log(error);
		return ;
	}
	console.log("数据写入成功");
	fs.readFile("text.txt",function(error,data){
		if(error){
			console.log("数据读取失败！！");
			return ;
		}
		console.log("数据读取完成"+data.toString());
	})
})
