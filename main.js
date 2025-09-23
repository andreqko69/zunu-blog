const userName = prompt("Enter your name:");
const userAge = parseInt(prompt("Enter your age:"));

const user = {
  name: userName,
  age: userAge,
};

console.log("Name: " + user.name + ", " + "age: " + user.age);

const MINIMUM_ACCESSIBLE_AGE = 18;

if (user.age < MINIMUM_ACCESSIBLE_AGE) {
  console.log("Access denied");
} else {
  console.log("Access allowed");
}
