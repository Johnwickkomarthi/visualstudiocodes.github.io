var str= "/Date(1445558400-0500)/";
var result = str.substring(str.indexOf("(")+1,str.indexOf("-"));
var r=parseInt(result);
var myDate = new Date(r*1000);
console.log(myDate.toGMTString());
console.log(myDate.getDate()+'/'+(myDate.getMonth()+1)+'/'+myDate.getFullYear());