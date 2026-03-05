
// Do Basic Math
function calc(a,b){
 console.log( "8 + 9 =",a + b);
 console.log("8 - 9 =" ,a - b);
  console.log("8 * 9 =",a * b);
 console.log("8 / 9 =",a / b);
}
calc(8,9);


// Use alert(), console.log(), and document.write() to show “Hello World”.
console.log("HELLO WORLD");
alert("HELLO WORLD");
document.write("HELLO WORLD");

// Create variables
// // Make variables: name (string), age (number), isStudent (boolean).
// Show them using console.log().

let Person = {
       fullname : "Aliza Hassan",
       age : 18,
       isstudent : true
}
console.log(Person);


// Function to show an alert and update the <p> tag
function showAlert() {
    alert("Button was clicked!");
    document.getElementById("output").innerHTML = "The button has been clicked!";
}
