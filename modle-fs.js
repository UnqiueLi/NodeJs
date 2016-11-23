var fs=require("fs");
fs.open("text.txt","r+",function(error,sc){
	if(error){
		console.log(error);
		return ;
	}
		console.log("文件打开成功")
})