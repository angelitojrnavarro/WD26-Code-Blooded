let fName = "John";
let lName = "Smith";
let age = 30;
let hobbies = [
    "Biking",
    "Mountain Climbing",
    "Swimming"
];

let address = {
    houseNumber: "32",
    street:"Washington",
    city:"Licoln",
    state:"raska"
};

console.log("Hello World");
console.log(`First Name: ${fName}`);
console.log(`Last Name: ${lName}`);
console.log(`Age: ${age}`);
console.log("Hobbies:");
console.log(hobbies);
console.log("Work Address:")
console.log(address);


let fName1 = "Jelly Lumactud";
let age1 = 20;
let isMarried = true;


console.log(`My name is ${fName1}, ${age1} years of age`);
console.log("This was printed inside of the function:");

function hob()
{
    let hob = [
        "Biking",
        "Mountain Climbing",
        "Swimming"
    ]
    console.log(hob);
}
hob();
console.log("This was printed inside of the function:");
function add()
{
    let add = {
        houseNumber: "32",
        street:"Washington",
        city:"Licoln",
        state:"raska"
    };
    console.log(add);
}
add();

console.log(`The value of isMarried is: ${isMarried}`);