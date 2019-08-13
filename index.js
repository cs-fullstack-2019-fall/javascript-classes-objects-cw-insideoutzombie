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




// I c u looking :P
