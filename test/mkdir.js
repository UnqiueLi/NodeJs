var fs=require("fs");
fs.mkdir("test",function(error){
	if(error){
		console.log("创建失败");
		return ;
	}
	console.log("创建成功")
})