const fs=require("fs");
fs.writeFileSync("Hello.txt","Hello node");
fs.readFile("Hello.txt","utf8",function(err,data){
    console.log(data);
});
