var btn1 = document.querySelector("#upload");
var btn2 = document.querySelector("#newsletter");
var btn3 = document.querySelector("#learn");

btn1.addEventListener("mouseover", function() {
  this.value = "> I Have A Story To Tell <";
})
btn1.addEventListener("mouseout", function() {
  this.value = "I Have A Story To Tell";
})

btn2.addEventListener("mouseover", function() {
  this.value = "> Subscribe To Our Newsletter <";
})
btn2.addEventListener("mouseout", function() {
  this.value = "Subscribe To Our Newsletter";
})

btn3.addEventListener("mouseover", function() {
  this.value = "> I Would Like To Learn More <";
})
btn3.addEventListener("mouseout", function() {
  this.value = "I Would Like To Learn More";
})