var fs=require("fs");
fs.unlink("text.txt",function(error){
	if(error){
		console.log(error);
		console.log("删除失败");
		return ; 
	}
	console.log("删除成功");
})