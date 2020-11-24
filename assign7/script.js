
function result() {

  var num1 = prompt('enter random number');
  var num2 = prompt('enter random number');
  var num3 = prompt('enter random number');


//largest number

function largestNum() {

if (num1 > num2 && num1 > num3) {
  console.log(num1);
}

else if (num2 > num1 && num2 > num3) {
 console.log(num2);
}

else if (num3 > num1 && num3 > num2){
  console.log(num3);
};

}

largestNum();

//middle number

function middleNum() {

if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
  console.log(num1);
}

else if (num2 > num1 && num2 < num3 ||num2 > num3 && num2 < num1) {
 console.log(num2);
}

else if (num3 > num1 && num3 < num3 || num3 > num2 && num3 < num2){
  console.log(num3);
};
}
middleNum();


//last number

function lastNum() {

if (num1 < num2 && num1 < num3) {
  console.log(num1);
}

else if (num2 < num1 && num2 < num3) {
 console.log(num2);
}

else if (num3 < num1 && num3 < num2){
  console.log(num3);
};
}

lastNum();

}

result();











/*
//figuring out How would each case look ...

//num1
//largest number num1
num1 > num2 && num1 > num3
//middle number
num1 > num2 && num1 < num3
num1 > num3 && num1 < num2
//last number
num1 < num2 && num1 < num3



//num2
//largest num2
num2 > num1 && num2 > num3
//middle number
num2 > num1 && num2 < num3
num2 > num3 && num2 < num1
//last number
num2 < num1 && num2 < num3

//num3
//largest
num3 > num1 && num3 > num2
//middle number
num3 > num1 && num3 < num3
num3 > num2 && num3 < num2
//last number
num3 < num1 && num3 < num2

*/
