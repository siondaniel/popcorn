// site.js - Popcorns main javascript file
// Author: Sion Daniel
// Date: 05/26/2023

// Shuffle the movies array (Taken from ChatGPT)
function shuffleMovies(movieList) {
    var movies = movieList.find('img');
    movies.sort(function() {
      return 0.5 - Math.random();
    });
    movieList.empty();
    movieList.append(movies);
}

// The above function shuffles single dimensional arrays

$(document).ready(function() {
    var popupMessage = $('#popupMessage');
    var infoIcon = $('#infoIcon');
    var closeButton = $('.close-button');
    var boxes = $('.box');

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
    });
        
    // Create the movie list
    var movieList = $('.movie-list');
    shuffleMovies(movieList);

    // Find all movies and calculate how many movies per row
    var movies = movieList.find('img');
    var moviesPerRow = Math.ceil(movies.length / 3);

    // Clear the movie list
    movieList.empty();

    // Create 3 rows of movies
    for (var i = 0; i < movies.length; i += moviesPerRow) {
        var moviesInRow = movies.slice(i, i + moviesPerRow);
        var row = $('<div class="row"></div>');
        row.append(moviesInRow);
        movieList.append(row);
    }

    // Display the movie list by making display: flex
    movieList.css('display', 'flex');

});
