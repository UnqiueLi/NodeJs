var fs=require("fs");
fs.readdir("test",function(error,files){
	if(error){
		console.log(error);
		console.log("文件夹读取失败!!")
		return;
	}
	console.log(files)
	console.log("文件读取成功")
})