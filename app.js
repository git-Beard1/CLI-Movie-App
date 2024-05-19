// Create a Movie Class

class Movie {

    constructor(Name, Genre, RunningTime, ReleaseDate, Rating) {
        this.Name = Name;
        this.Genre = Genre;
        this.RunningTime = RunningTime;
        this.ReleaseDate = ReleaseDate;
        this.Rating = Rating;
    }

    // Calculate the running time for the movies.

    calculateRunningtime() {

        var hours = Math.floor(this.RunningTime / 60);
        var minutes = this.RunningTime % 60;
        var time = "";

        if (minutes == 0) {
            time = `${hours}h`;
        }
        else if (hours == 0) {
            time = `${minutes}m`;
        }
        else {
            time = `${hours}h ${minutes}m`;
        }
        return time;

    }

    // Calculate the ratings of the movies.

    calculateRating() {
        var rating = Math.round((this.Rating[1] / this.Rating[0]) * 10) / 10;

        if (isNaN(rating)) { // the new movie added rating calculation is "0/0" resulting in NaN.
            rating = 0; // Change NaN to 0.
        }

        var voters = ` (${this.Rating[0]} voters)`;
        var benchMark = [];

        benchMark.push(rating); // In order to show only the rating in Editor's Choice Special Features
        benchMark.push(`${rating}${voters}`); // Show both the rating and the voters.
        return benchMark;
    }

    // displayMovieDetails method that does not take in parameter return movie's details.

    displayMovieDetails() {
        return `Name\t\t\t: ${this.Name}\nGenre\t\t\t: ${this.Genre}\nRunning Time\t\t: ${this.calculateRunningtime()}\nRelease Date\t\t: ${this.ReleaseDate}\nRating\t\t\t: ${this.calculateRating()[1]}`
    }

    // Special Advanced Features Section
    // Option 6: Editor's choice, shows top 5 highly rated movies details and prompts to create watch list.

    highestToLowestMoviesDetails() {
        return `Name\t\t\t: ${this.Name}\nGenre\t\t\t: ${this.Genre}\nRunning Time\t\t: ${this.calculateRunningtime()}\nRelease Date\t\t: ${this.ReleaseDate}\nRating\t\t\t: ${this.calculateRating()[0]}`
    }

    // Option 7: Creates the watch list after being shown the movies and shows the movies stored when selected

    watchList() {
        var watchList = ""; // declare a variable in order to use return.

        if (watchListArr.length == 0) {  // prompts message when the watch list is empty.
            return `\nDear ${name}, your watch list is empty.`;
        }

        else {
            console.log(`\nDear ${name}, kindly see your watch list.\n`);

            for (var watchListIndex = 0; watchListIndex < watchListArr.length; watchListIndex++) {
                watchList += `\t${watchListIndex + 1}) ${watchListArr[watchListIndex]}\n`;
            }
            return watchList;
        }
    }

}

// An array to store movies in watchlist

var watchListArr = [];

// Instantiate a new object for watch list to display.
var movieObject = new Movie();

// Instantiate the five movies

const movie_1 = new Movie("Black Panther: Wakanda Forever 2022",
    ["Adventure", "Action", "Drama", "Fantasy", "Sci-Fi", "Thriller"],
    161, "11 Nov 2022", [9, 42]);

const movie_2 = new Movie("Avatar: The Way of Water",
    ["Adventure", "Sci-Fi"],
    192, "16 Dec 2022", [4, 15]);

const movie_3 = new Movie("Fast X",
    ["Crime", "Action", "Mystery", "Thriller"],
    43, "19 May 2023", [28, 60]);

const movie_4 = new Movie("Ant-Man and the Wasp: Quantumania",
    ["Adventure", "Action"],
    120, "16 Feb 2023", [18, 80]);

const movie_5 = new Movie("M3GAN",
    ["Horror", "Mystery", "Thriller"],
    102, "6 Jan 2023", [20, 70]);

// An object array to store all the movie objects

const movieList = [movie_1, movie_2, movie_3, movie_4, movie_5];

// An array for the genre menu.

var genreMenu = ["Action", "Adventure", "Crime", "Drama", "Fantasy", "Horror", "Mystery", "Sci-Fi", "Thriller"];

// Validation 

// Option 2: Add Movie Validation. Checks whether added movie is in the database or not.
function addMovieValidation(inputMovie) {

    var movieNoRepeat = "";  // a variable for the existing movies
    var movieCount = 0; // count to decide to loop or not.

    inputMovie = MovieName.split(/[^a-zA-Z1-9]/).join("").toLowerCase(); // remove spaces and commas, joins the statement and turn to lowercase for the movie added by user.

    for (var movieNameIndex = 0; movieNameIndex < movieList.length; movieNameIndex++) {

        movieNoRepeat = movieList[movieNameIndex].Name.split(/[^a-zA-Z1-9]/).join("").toLowerCase(); // remove spaces and commas, joins the statement and turn to lowercase for the existing movies in database.

        if (movieNoRepeat == inputMovie) { // checks if the input movie and the existing movies are the same.
            console.log("\n\tThis movie is already in the Movie Review Program.\n\t\tPlease enter a unique movie name!"); // if same, prompts error message.
            movieCount++;
        }
    }
    if (movieCount > 0) {  // condition for the loop. Will continue looping if true.
        return true;
    }
    else {
        return false;
    }
}


// Checks decimal, checks the input is in range or not, and ensures to be a number.
function optionValidation(inputUser, inputCount) { //  inputuser is user's input. inputCount is the range.

    var validCount = 0;

    // decimal validation
    for (var inputStringCount = 0; inputStringCount < inputUser.length; inputStringCount++) {
        if (inputUser[inputStringCount] == ".") {
            validCount++;
        }
    }

    // checks input is a number and in range or not
    if (inputUser < 1 || inputUser > inputCount || isNaN(inputUser)) {
        validCount++; // increment count by 1 if invalid.
    }

    else {
        validCount; // count remains the same if valid.
    }

    if (validCount > 0) {
        return true; // condition for loop. If true, will loop.
    }

    else {
        return false; // if false, moves on to another step.
    }
}

// Validation for both Genre in option 2 and Watch List movie adding
// Removes spaces and commas. Checks within range or not.
function splitArrValidation(inputUserNumber, userOptionLength) {

    if (inputUserNumber.length == 0) {
        console.log("\tPlease enter at least one value.")
        return true;
    }

    else {
        var numbers = inputUserNumber.split(","); // remove the commas from the input
        var count = 0;  // count for loop condition
        var repeatUserInput; // variable for repeatation condition. 
        splitArr = []; // an array to store the numbers without commas.

        for (var index = 0; index < numbers.length; index++) {
            var numberInput = numbers[index].trim();  // trim eliminiates space

            if (optionValidation(numberInput, userOptionLength)) { // calls back option validation function
                count++;
            }
            else {
                splitArr.push(numberInput); // the number will be pushed inside array if valid.
            }
        }

        splitArr.sort((index1, index2) => { // sort the values in asending order.
            return index1 - index2;
        });

        repeatUserInput = new Set(splitArr).size != splitArr.length; // checks repeatation
        /*
            Will print out false when type in anything greater than userOptionLength. 
            eg. 12,12. splitArr is empty. So, when checked , 0 = 0 => false 
        */

        if (repeatUserInput) { // repeatation condition. loops if true.
            // Different mesages for different options.
            if (choice == 2){ 
                console.log("\tPlease do not enter duplicate genre option(s)!"); 
                return true;
            }
            // Different mesages for different options.
            else{
                console.log("\tPlease do not enter duplicate movie option(s)!");
                return true;
            }
        }

        else if (count > 0) { // if not according to optionValidation, outputs message loops.
            // Different mesages for different options.
            if (choice == 2){
                console.log("\tPlease enter valid genre option(s)!");  
                return true;
            }
            // Different mesages for different options.
            else{
                console.log("\tPlease enter valid movie option(s)!");
                return true;
            }

        }

        else {
            return false; // breaks loop. Moves on to next step.
        }
    }
}

// Validation for movie running time
function movieRunningTimeValidation(inputRunningTime) {

    if (isNaN(inputRunningTime)) {   // checks whether alphabet or not
        console.log("\tPlease enter valid running time!");
        return true;
    }

    else {
        return false;
    }
}

function movieGenreArrLink(movieGenreArrCondition) { // links the split array values(user input numbers) to the genres.
    newMovieGenre = []; // An array to store the user's chosen genres

    for (var movieGenreArrIndex = 0; movieGenreArrIndex < splitArr.length; movieGenreArrIndex++) {
        var movieGenreIndex = splitArr[movieGenreArrIndex]; // find the user input number, i.e index
        movieGenreIndex--; // minus by one to link to the genreMenu, eg. "Action" is option 1. However, array index is 0.
        newMovieGenre.push(movieGenreArrCondition[movieGenreIndex]); // store inside newMovieGenre array and will later included in an object for new added movie.
    }
}

function watchListArrLink(watchListCondition) { // links the split array values(user input numbers) to the highest to lowest movies menu.

    for (var watchListArrIndex = 0; watchListArrIndex < splitArr.length; watchListArrIndex++) {
        var watchListLinkIndex = splitArr[watchListArrIndex]; // find the user input number, i.e index
        watchListLinkIndex--; // minus by one to link to the watch list movies menu.
        watchListArr.push(watchListCondition[watchListLinkIndex].Name); // store the movie inside the watch list array.
    }
}

// Rating Validation. Checks decimals, alphabets and any special symbols.
function ratingValidation(inputRating) {

    if (!(/^[1-5]$/.test(inputRating))) {
        console.log("\tEnter a valid rating!"); // if not integer, prompts message.
        return true; // loop if true.
    }

    else {
        return false;
    }
}

var genreFilter; // Initialize a variable to store user's genre.
// Filter by Genre Validation. Checks special symbols, space, and decimals.
function filterByGenreValidation(inputFilterByGenre) {

    if (/^[1-9]$/.test(inputFilterByGenre)) { // Checks special symbols, space, and decimals.
        genreFilter = genreMenu[inputFilterByGenre - 1]; // Links with the genreMenu to display genre instead of chosen number option.
        return false; // loop condition. Moves on to next step.
    }

    else {
        console.log("\tPlease enter a valid genre input!"); // An error message displayed if invlaid.
        return true; // loop condition. loops if true.
    }
}

console.log(`\nWelcome to Silver Vintage Movie Review Program`); // Prints out the first welcome message.

var input = require('readline-sync');
const specialCharacters = /[^a-zA-Z\s]/; // A regular expression to test for name validation. \s represents space.
const choiceValidation = /^[1-8]$/; // A regular expression to validate the main menu input by user.

do {
    var name = input.question("Please enter your name: "); //prompts username.

    if (specialCharacters.test(name) || name.length == 0) {
        console.log("\nPlease enter a valid name."); // a message to prompt if invaild.
    }

} while (specialCharacters.test(name) || name.length == 0); // condition for loop. If included special symbols, or numbers, will loop.


do {
    console.log(`\nHi ${name}, please select your choice:\n`); // Selection message with user name.

    const menu = {                         // An object to display Main Menu Option.
        option1: "1.Display all movies",
        option2: "2.Add Movie",
        option3: "3.Add Rating",
        option4: "4.Latest 3 Release Date",
        option5: "5.Filter By Genre",
        option6: "6.Editor's Recommendation (Special Feature)",
        option7: "7.Watch List",
        option8: "8.Exit"
    }

    for (const options in menu) {      // a for loop to display all the menu options.
        console.log(`\t${menu[options]}`);
    }

    do {
        var choice = input.question("\t" + ">> "); // User choice prompt for main menu selection.

        if (!choiceValidation.test(choice)) {   // if not within range of 1 to 8, prompts error. Validated by regular expression above.
            console.log("\n\tPlease enter a valid input.")
        }

    } while (!choiceValidation.test(choice)); // loops if condition is not satisfied by regular expression.

    if (choice == 1) { // Display all movies' details by for loop.
        for (var movieDetailsIndex = 0; movieDetailsIndex < movieList.length; movieDetailsIndex++) {
            console.log("\n" + movieList[movieDetailsIndex].displayMovieDetails()); // recall displayMovieDetails method to print out all movies.
        }
    }

    else if (choice == 2) {

        do {
            var MovieName = input.question("\n\tPlease enter movie name: "); // Prompts for movie name to add.

            if (MovieName.length == 0) { // if user input none, prints the message.
                console.log("\tMovie Name invalid. Please enter a valid Movie Name.")
            }

        } while (addMovieValidation(MovieName) || MovieName.length == 0); // Condition for loop.
        var newMovieName = MovieName; // The valid movie name will be stored in this variable to be later on add to object.

        console.log("\n\tPlease enter Movie's genre(s)"); // Movie genre message.

        for (var genreMenuIndex = 0; genreMenuIndex < genreMenu.length; genreMenuIndex++) {
            console.log(`\t${genreMenuIndex + 1}) ${genreMenu[genreMenuIndex]}`); // prints out the whole genreMenu options.
        }

        do {
            var genreInput = input.question("\t>> "); // prompts for user's choice genre.

        } while (splitArrValidation(genreInput, genreMenu.length));
        movieGenreArrLink(genreMenu); // links the input with the menu option to be later shown in option 1.

        var newMovieReleaseDate = input.question("\n\tPlease enter Movie's release date: ");
        /*
            Prompts for movie's release date. No validation as stated by brief. 
            Will be also stored in an object for newly added movie.
        */
        do {
            var runningTimeInput = input.question("\n\tPlease enter Movie's running time (mins) : "); // Prompts for movie's running time.

            if (runningTimeInput.length == 0) { // An error message for no input by user.
                console.log("\tMovie Running Time was not received. Please enter again.")
            }

        } while (movieRunningTimeValidation(runningTimeInput) || runningTimeInput.length == 0); // condtion for loop.
        var newMovieRunningTime = runningTimeInput; //The valid movie runnning time will be stored in this variable to be later on add to object.

        var newMovieRating = [0, 0]; //Initialize the rating for new added movie.

        var newMovie = new Movie(newMovieName, newMovieGenre, newMovieRunningTime, newMovieReleaseDate, newMovieRating); // Create an object to store all properties of the added movie.
        movieList.push(newMovie); // Push the new movie object inside movieList Array.
    }

    else if (choice == 3) {

        do {
            console.log("\n\tSelect the movie to add a rating:"); // Message to inform user to add rating of movie.

            for (var ratingMenuCount = 0; ratingMenuCount < movieList.length; ratingMenuCount++) { // A for loop to display all movies.
    
                if (ratingMenuCount < movieList.length) {
                    var addMovieRatingMenu = `\t${ratingMenuCount + 1}) ${movieList[ratingMenuCount].Name}`;
                    console.log(addMovieRatingMenu);
                }
    
            }
    
            console.log(`\t${ratingMenuCount + 1}) Go Back to Main Menu`); // Go Back to Main Menu option message.

            var ratingMenuOption = input.question("\n\t>> ");  // Prompt to add rating to one of the movies.
            
            if (ratingMenuOption.length == 0){
                console.log("\tPlease kindly select one movie."); // An error message when input is none.
            }
            else if (optionValidation(ratingMenuOption, ratingMenuCount + 1)){
                console.log("\tKindly enter a valid input!");
            }

        } while (optionValidation(ratingMenuOption, ratingMenuCount + 1)); // Condition for loop.

        if (ratingMenuOption != ratingMenuCount + 1) { // If user input was not "Go Back To Main Menu", prompts for rating number.

            do {
                var ratingInput = input.question(`\n\tEnter your rating for "${movieList[ratingMenuOption - 1].Name}" (1 to 5 inclusive): `);

            } while (ratingValidation(ratingInput)); // Condtion for loop. Validated by ratingValidation function.

            ratingInput = parseInt(ratingInput);// change string value to integer.

            movieList[ratingMenuOption - 1].Rating[0] += 1; // increase by one voter if user gives rating.
            movieList[ratingMenuOption - 1].Rating[1] += ratingInput; // the added rating value is added into total rating.

        }
    }

    // Option 4: Latest 3 Movie Release Dates
    else if (choice == 4) {

        var sortedReleaseDate = movieList.slice().sort((a, b) => { // create a movieList copy and sort the dates
            var date1 = new Date(a.ReleaseDate); // create date objects to compare instead of String values.
            var date2 = new Date(b.ReleaseDate);
            return date2 - date1; // date2 - date1 returns the descending order of movies' release dates.
        });

        console.log(`\n\tThe latest 3 movies are:`); // The latest 3 movie release dates message.

        for (var h = 0; h < 3; h++) {
            console.log(`\t${h + 1}) ${sortedReleaseDate[h].ReleaseDate} - ${sortedReleaseDate[h].Name}`) // A for loop to display release dates with movie names.
        }

    }

    // Option 5: Filter By Genre Option
    else if (choice == 5) {

        do {
            console.log("\n\tPlease select a genre:"); // A message to select genre to filter.
            for (var genreOptions = 0; genreOptions < genreMenu.length; genreOptions++) {
                console.log(`\t${genreOptions + 1}) ${genreMenu[genreOptions]}`); // a for loop to display genreMenu.
            }

            var filterByGenreInput = input.question("\t>> "); // prompts for user input genre.

        } while (filterByGenreValidation(filterByGenreInput)); // condition for loop. Validated by filterByGenre function above.


        var filterByGenreMovieCount = 0; // Initialized for serial number of display movies.

        console.log(`\n\tYou have selected "${genreFilter}" genre:`); // prints out the selected genre.

        for (var filterByGenreIndex = 0; filterByGenreIndex < movieList.length; filterByGenreIndex++) { // Outer loop by movieList array.
            for (var genreInsideMovieIndex = 0; genreInsideMovieIndex < movieList[filterByGenreIndex].Genre.length; genreInsideMovieIndex++) { // Inner loop to check genre of each movie one by one.

                if (genreFilter == movieList[filterByGenreIndex].Genre[genreInsideMovieIndex]) { // Checks each genre of each movie is the same as user's selected genre.
                    filterByGenreMovieCount++; // count incremented by one to display serial number of movie.
                    console.log("\t" + filterByGenreMovieCount + ") " + movieList[filterByGenreIndex].Name); // prints out the movie names in accordance with user's selected genre.
                }

            }
        }
    }

    // Special Advanced Features (Option 6 and 7);
    // Option 6: Editor's Recommendation (Special Feature)
    else if (choice == 6) {

        var movieListCopy = movieList.slice(); // Make a copy of movieList in order to not modified the original movieList array.

        var sortedRating = movieListCopy.sort((l, m) => { // sort the movies' rating
            var rating1 = l.calculateRating()[0]; // extracts only the rating value.
            var rating2 = m.calculateRating()[0];
            return rating2 - rating1; // return the movies' rating in descending order.
        });

        console.log("\n\t\t\t\tDiscover your movie match.\n\n\tHere are the top five movies of Silver Vintage Movie Review Program.\n"); // An introduction message for Editor's Choice.

        for (var specialIndex = 0; specialIndex < 5; specialIndex++) {
            console.log(`\nNo(${specialIndex + 1}) Highest Rated Movie \n\n${sortedRating[specialIndex].highestToLowestMoviesDetails()}`); // Display all movies from highest to lowest.
        }

        console.log("\nWould you like to create a watchlist? "); // A message for user for watch list creating.

        var watchListOption = ["Yes", "No"]; // An array for option to later display by loop.
        for (var optionIndex = 0; optionIndex < watchListOption.length; optionIndex++) {
            console.log(`${optionIndex + 1}) ${watchListOption[optionIndex]}`); // displays watch list options.
        }

        do {
            var watchListInput = input.question(">> "); // prompts user's decision.
            if (optionValidation(watchListInput, watchListOption.length)) {
                console.log("Please enter a valid input."); // An error message if invalid.
            }

        } while (optionValidation(watchListInput, watchListOption.length)); // Condtion to loop.

        if (watchListInput == 1) { // if user selects "Yes",

            console.log("\nPlease select the movies to add to the watchlist. (Movies Rated from Highest to Lowest)\n"); // Movies from higest to lowest to add.

            for (var watchListMenuIndex = 0; watchListMenuIndex < sortedRating.length; watchListMenuIndex++) {
                console.log(`\t${watchListMenuIndex + 1}) ${sortedRating[watchListMenuIndex].Name}`); // displays all movies from highest to lowest.
            }

            do {
                var watchListMenuOption = input.question("\t>> "); // Prompts for user's choice of movie(s) to add to watchlist.
 
            } while (splitArrValidation(watchListMenuOption, sortedRating.length)); // condtion to loop.
            watchListArrLink(sortedRating);

            console.log(movieObject.watchList());  // Prints out the newly created watch list.
        }
    }

    // Option 7: Watch List
    else if (choice == 7) { 
        console.log(movieObject.watchList()); // Displays watch list made by user.
    }

} while (choice != 8); // The main menu will be displayed until user selects "Exit".