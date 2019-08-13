// ### Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code.
// Create a function that prints all properties. Create an object of the class and use the function.
class GitHubRepository {
  constructor (userName, fileName, descriptionOfRepository, code) {
    this.userName_props = userName;
    this.fileName_props = fileName;
    this.descriptionOfRepository_props = descriptionOfRepository;
    this.code_props = code;
  }
  callCode() {
    return console.log(this.userName_props);
           console.log(this.fileName_props_prop);
           console.log(this.descriptionOfRepository_props_prop);
           console.log(this.code_props_prop);
  }
}

let myRepo = new GitHubRepository("insideoutzombie", "how to save a zombie", "like a game but real", 9832481298321481);
console.log(myRepo);

// ### Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased.
// Create a method to change the rating and another one to change the yearReleased properties.
// Create an object of the class and use the two methods you created.
class Movie {
  contructor(movieName, rating, yearReleased) {
    this.movieName_props = movieName;
    this.rating_props = rating;
    this.yearReleased_props = yearReleased;
  }
  magicSauce() {
    return console.log(this.movieName_props);
           console.log(this.rating_props);
           console.log(this.yearReleased_props);
  }
}

let newMovie = new Movie("Tiny Smurf", 9, 2015);
newMovie.rating_props = 6;
newMovie.yearReleased_props = 2012;
console.log(newMovie);

// ### Challenge 1:
// Create a Person class with three properties: name, weight, and height.
// Create a method that can calculate the BMI of a person using the formula below.
// Create an object of the class and use the function.

class Person {
  constructor(name, weight, height) {
    this.name_props = name;
    this.weight_props = weight;
    this.height_props = height;
  }
  measure() {

  }
}
// BMI is  (weight / (height * height)) x 703. Weight is in pounds and height is in inches.
let newPerson = new Person("Gangster", 178, 120);
console.log(newPerson);


// ### Challenge 2:
// Create a Bank class with the the name and balance properties.
// Afterwards, create an object of the class and follow the instructions below:
// - Creates an account named "Matt's account" with the balance of 1000
// - Creates an account named "My account" with the balance of 0
// - Withdraws 100.0 from Matt's account
// - Deposits 100.0 to My account
// - Prints both accounts
class Bank {
  constructor(name, balance) {
    this.name_props = name;
    this.balance_props = balance;
  }
  newAccount() {
    return console.log(this.name_props);
           console.log(this.balance_props);
  }
}

let newMatt = new Bank("Matt's account", 1000);
let myAccount = new Bank("My account", 0);
console.log(newMatt);
console.log(myAccount);





// I c u looking :P
