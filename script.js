//Day 07 Task Array Methods

//1.Solving problems using array functions on the rest countries' data 
//a. Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result.filter((value)=>value.region=="Asia"));
}

//b.Get all the countries with a population of less than 2 lakhs using the Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result.filter((value)=>value.population < 200000));
}


//c.Print the following details name, capital, and flag using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
result.forEach((value)=>console.log(value.name))
result.forEach((value)=>console.log(value.capital))
result.forEach((value)=>console.log(value.flags))
}

//d.Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result.reduce((accu,curr)=>accu+curr.population));

 }
