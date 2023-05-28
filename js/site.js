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

// Shuffle the movies array (Taken from ChatGPT)
function shuffleMovies(movieList, genre='all' ){
    var movies = movieList.find('img');
    // Filter movies by genre
    if (genre != 'all') {
        movies = movies.filter('[data-category="' + genre + '"]');
    }
    // Shuffle the movies
    movies.sort(function() {
      return 0.5 - Math.random();
    });
    movieList.empty();
    movieList.append(movies);
}

$(document).ready(function() {
    var popupMessage = $('#popupMessage');
    var infoIcon = $('#infoIcon');
    var closeButton = $('.close-button');
    var boxes = $('.box');
    var movieRows = $('.movie-list .row');

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
        $(this).toggleClass('clicked');

        // Assign a unique color class to the clicked box
        var colors = ['Adventure', 'Comedy', 'Action', 'Western', 'Documentary', 'Horror', 'Mystery'];
        var index = $(this).index() % colors.length;
        $(this).removeClass(colors.join(' ')).addClass(colors[index]);

        // Define a variable for the clicked boxes
        var categories = boxes.filter('.clicked').map(function() {
            return $(this).text();
        }).get();
    
        movieRows.each(function() {
            var $row = $(this);
            var $images = $row.data('originalImages');
            var $filteredImages = $images.filter('[data-category="' + category + '"]');
            
            $row.empty().append($filteredImages);
        });
    });

    // Define the movie list
    var movieList = $('.movie-list');

    // Clear the movie list
    movieList.empty();

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

    // Now make the movies appear on the page
    movieList.css('display', 'flex');
        
    // Create the movie list
    // var movieList = $('.movie-list');
    shuffleMovies(movieList);

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
});
