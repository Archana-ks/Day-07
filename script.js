//Day 07 Task Array Methods


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result.filter((value)=>value.region=="Asia"));
// result.forEach((value)=>console.log(value.name))
// result.forEach((value)=>console.log(value.capital))
// result.forEach((value)=>console.log(value.flags))
// console.log(result.filter((value)=>value.population<=200000));
// console.log(result.reduce((accu,curr)=>accu+curr.population));



var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
result.forEach((value)=>console.log(value.name))


 
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
result.forEach((value)=>console.log(value.capital))



var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
result.forEach((value)=>console.log(value.flags))




var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result.filter((value)=>value.population<=200000));



var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result.reduce((accu,curr)=>accu+curr.population));


 }