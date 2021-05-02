var a = "010110100";
var b = "001110100"
var w = "001010100";

const kazananSayilar = ["111000000","000000111","000111000","100100100","010010010","001001001","100010001","001010100"]

var x = "100000000";
var y = "000000000";



// console.log(iswin(b,w));
function bin2dec(bin){
  return parseInt(bin, 2)
}



function iswin(a,w){
if(bitwiseand(a,w) === parseInt(w,2)){
return 1;
}
else{
return 0;
}
}


function bitwiseand(a,w){
  return parseInt(a, 2) & parseInt(w, 2)
}