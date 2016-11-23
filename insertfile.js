var fs = require("fs");
var file = "data.js";
var insertData = "嘿嘿嘿ヾ(o◕∀◕)ﾉヾヾ|≧_≦|〃ヾ§ ￣▽)ゞ2333333ヾﾉ≧∀≦)o死开!韩茹茹ヽ(o_ _)o摔倒ミ(ﾉ゜д゜)ﾉ打你哦ლ(⌒▽⌒ლ)ლ(╹◡╹ლ)じò ぴéヘ(_ _ヘ)ლ(´ڡ`ლ)Ψ(￣∀￣)Ψ";
fs.readFile(file,function(error,data){
	if(error){
		console.log("读取"+ file +"文件失败")
		return;
	}
	var newData = data.toString() + insertData;
	fs.writeFile(file,newData+"\n",function(error){
		if(error){
			console.log("写入"+ file +"文件失败")
			return;
		}
		console.log(file + "写入成功");
	})

})