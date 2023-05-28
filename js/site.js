// site.js - Popcorns main javascript file
// Author: Sion Daniel
// Date: 05/26/2023

// Define the movies by genre
var movies = {
    'Action': [
        'Atomic Blonde',
        'Die Hard(1988)',
        'Drive',
        'Gladiator',
        'Inception',
        'John Wick (2014)',
        'Kill Bill',
        'Matrix (1999)',
        'Mr And Ms Smith',
        'Police Stories',
        'Predator (1987)',
        'Robocop',
        'Rush Hour (1998)',
        'Super Cop (1992)',
        'Top Gun (1987)'
    ],
    'Horror': [
        'A Girl Walks Home At Night Alone',
        'Aliens',
        'A Nightmare On Elm Street',
        'Demon',
        'Evil Dead',
        'Frankenstein',
        'It',
        'Land Of The Dead',
        'Lights Out',
        'Scream',
        'Shadow Of The Vampire',
        'The House Of Dracula',
        'The House Of The Devil',
        'The Ring',
        'Zombieland'
    ]
};

// Define the movie categories
var categories = Object.keys(movies);

// Shuffle the movies array
function shuffleMovies(movieList, categories=[] ){
    var moviesFound = movieList.find('img');
    // Filter movies by genre
    if (categories.length > 0) {
        moviesFound = moviesFound.filter(function() {
            var movie = $(this);
            var movieCategory = movie.data('category');
            return categories.indexOf(movieCategory) !== -1;
        });
    }
    //    movies = movies.filter('[data-category="' + genre + '"]');
    //}
    // Shuffle the movies (Taken from ChatGPT)
    moviesFound.sort(function() {
      return 0.5 - Math.random();
    });
    movieList.empty();
    movieList.append(moviesFound);
}

// Display the movies
function displayMovies(movieList) {
    // Find all movies and calculate how many movies per row
    var moviesArray = movieList.find('img');
    var moviesPerRow = Math.ceil(moviesArray.length / 3);

    // Clear the movie list
    movieList.empty();

    // Create 3 rows of movies
    for (var i = 0; i < moviesArray.length; i += moviesPerRow) {
        var moviesInRow = moviesArray.slice(i, i + moviesPerRow);
        var row = $('<div class="row"></div>');
        row.append(moviesInRow);
        movieList.append(row);
    }

    // Display the movie list by making display: flex
    movieList.css('display', 'flex');
}

// Create the movie list
function createMovieList(movieList) {
    // Create the movie list
    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        var moviesInCategory = movies[category];

        for (var j = 0; j < moviesInCategory.length; j++) {
            var movie = moviesInCategory[j];
            // create another movie variable with the spaces removed
            var movieNoSpaces = movie.replace(/\s/g, '');
            var movieImage = $('<img src="img/movies/' + category + '/' + movieNoSpaces + '.png" alt="' + movie + '" data-category="' + category + '">');
            movieList.append(movieImage);
        }
    }
}

$(document).ready(function() {
    // Define variables
    var popupMessage = $('#popupMessage');
    var infoIcon = $('#infoIcon');
    var closeButton = $('.close-button');
    var boxes = $('.box');
    var selectedCategories = []; // Array to store selected categories

    // Hide the popup message when the close button is clicked
    closeButton.on('click', function() {
        popupMessage.removeClass('active');
        boxes.css('margin-top', '20px');
        popupMessage.hide();
    });

    //If the popup message is visible, hide it when the user clicks anywhere else on the page
    // NOT SURE WE REALLY WANT THIS
    /*
    $(document).mouseup(function(event) {
        if (popupMessage.is(':visible')) {
            if (!popupMessage.is(event.target) && popupMessage.has(event.target).length === 0) {
                popupMessage.removeClass('active');
                boxes.css('margin-top', '20px');
                popupMessage.hide();
            }
        }
    });
    */

    // Show the popup message when the info icon is clicked
    infoIcon.on('click', function() {
        popupMessage.show();
        popupMessage.addClass('active');
        boxes.css('margin-top', popupMessage.outerHeight() + 40 + 'px');
    });

    // Toggle the clicked class when a box is clicked
    boxes.on('click', function() {
        // Toggle the clicked class
        $(this).toggleClass('clicked');

        // Assign a unique color class to the clicked box
        var colors = ['Adventure', 'Comedy', 'Action', 'Western', 'Documentary', 'Horror', 'Mystery'];
        var index = $(this).index() % colors.length;
        $(this).removeClass(colors.join(' ')).addClass(colors[index]);

        // Update the selected categories array
        var category = colors[index];
        var isSelected = $(this).hasClass('clicked');

        if (isSelected) {
            selectedCategories.push(category);
        } else {
            var categoryIndex = selectedCategories.indexOf(category);
            if (categoryIndex !== -1) {
                selectedCategories.splice(categoryIndex, 1);
            }
        }
        console.log(selectedCategories);

        var movieList = $('.movie-list');
        movieList.empty();
        createMovieList(movieList);
        shuffleMovies(movieList, selectedCategories);
        displayMovies(movieList);

        // Define a variable for the clicked boxes
        /*var clickedBoxes = $('.clicked');

        // IF there are more than 0 clicked boxes, show the movies thhat match the clicked boxes
        // Loop through the clicked boxes
        for (var i = 0; i < clickedBoxes.length; i++) {

            // Define a variable for the clicked box
            var clickedBox = $(clickedBoxes[i]);
            
            /*
            Ex. we have this: <div class="box" id="Adventure" data-category="adventure"><p>Adventure</p></div>
            If the user has this box selected, we want to show all movies with the data-category="adventure" attribute
            *
            var category = clickedBox.attr('data-category');
            console.log(category);
            var movieList = $('.movie-list');
            shuffleMovies(movieList, category);
            displayMovies(movieList);
        }*/
    });

    // Define the movie list
    var movieList = $('.movie-list');

    // Clear the movie list
    movieList.empty();

    createMovieList(movieList);
    
    // Shuffle the movies
    shuffleMovies(movieList);
    
    // Display the movies
    displayMovies(movieList);
});
