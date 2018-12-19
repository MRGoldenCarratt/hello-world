var a = document.cookie;
if(a===""){
var a = prompt("what is your name");
document.cookie = a;
}
document.write("hello " + a);
