// site.js - Popcorns main javascript file
// Author: Sion Daniel
// Date: 05/26/2023

// Define the movies by genre
var movies = {
    'Action': {
        'Atomic Blonde': ['Golden Eye 007', 'Invisible,Inc.'],
        'Die Hard(1988)': ['Die Hard', 'Die Hard Vendetta'],
        'Drive': ['City Car Driving', 'DiRT Rally'],
        'Gladiator': ['God of War Ragnarok', "Assassin's Creed Odyssey"],
        'Inception': ['Superhot', 'Watch Dogs 2'],
        'John Wick (2014)': ['Cyberpunk 2077', 'Superhot'],
        'Kill Bill': ['Kill Bill Java Game', 'Absolver'],
        'Matrix (1999)': ['Superhot', 'Enter the Matrix'],
        'Mr And Ms Smith': ["Assassin's Creed Mirage", 'It Takes Two'],
        'Police Stories': ['Police Stories', 'Contraband Police'],
        'Predator (1987)': ['Predator Hunting Grounds', 'Alien Isolation'],
        'Robocop': ['Cyberpunk 2077', 'Watch Dogs Legion'],
        'Rush Hour (1998)': ['Rush Hour 3D', 'Parking Jam 3D'],
        'Super Cop (1992)': ['Roblox', 'Sleeping Dogs'],
        'Top Gun (1987)': ['Ace Combat', 'Flight Simulator']
    },
    'Horror': {
        'A Girl Walks Home At Night Alone': ['Dark', 'Alone in the Dark'],
        'Aliens': ['Alien Isolation', 'Mass Effect'],
        'A Nightmare On Elm Street': ['Friday the 13th Game', 'Silent Hill'],
        'Demon': ['Devour', 'Pacify'],
        'Evil Dead': ['Until Dawn', 'Evil Dead: The Game'],
        'Frankenstein': ['Outlast', "The Wanderer: Frankenstein's Creature"],
        'It': ['Death Park', 'Dark Deception'],
        'Land Of The Dead': ['Resident Evil 2 Remake', 'Dying Light'],
        'Lights Out': ['', ''],
        'Scream': ['Dead By Daylight', 'Among Us'],
        'Shadow Of The Vampire': ['Castlevania', 'Vampire: The Masquerade - Bloodlines'],
        'The House Of Dracula': ['Vampyr', 'Vampire: The Masquerade - Bloodlines'],
        'The House Of The Devil': ['', ''],
        'The Ring': ['Dead by Daylight', 'Visage'],
        'Zombieland': ['Dead Rising', 'Dead Island 2']
    },
    'Mystery': {
        'Midsommar': ['Pathologic 2', 'Witch Hunt'],
        'Nope': ['The Invincible', 'Outer Worlds'],
        'Glass Onion': ['LA Noir', 'Disco Elysium'],
        'Escape Room': ['Portal 2', 'FireWatch'],
        'Shutter Island': ['House of Caravan', 'Dream Alone'],
        'Death Roulette': ['Borderland 3', 'Gears 5'],
        'Gone Girl': ["Anna's Quest", '10 Second Ninja Quest'],
        'The Killing of a Sacred Deer': ["Persona's 4s", 'Life is Strange'],
        'The Voyeurs': ['Immortality', 'Underworld Island'],
        'The Wonder': ["The Dragon's Trap", 'Villagers'],
        'Zodiac': ["Eventide", "Long"],
        'The Game': ['L.A. Noire', 'her Story'],
        'The Girl with the Dragon Tattoo': ['Heavy Rain', 'Red Dead 2'],
        'The Prestige': ['Magician', 'Banners Begone!'],
        'Transcendence': ['Halo: Combat Evolved', 'Horizon Zero Dawn']
    },
    'Adventure': {
        'Dune': ['Destiny', '2 Morrowind'],
        'Transformers': ['Transfromers: BattleGrounds', 'Earth Defense Force: World Brothers'],
        'Everything, Everywhere, All at Once': ['Alan Awake', 'Firewatch'],
        'Interstellar': ['Outer Wilds', 'Spore'],
        'Inception': ['Ai The Somnum Files', 'Death Stranding'],
        'Peter Pan': ['Kingdom Hearts', 'Planet Alpha'],
        "Harry Potter and the Sorcerer's Stone": ['Hogwarts Legacy', 'Skyrim'],
        'Kingsman: The Secret Service': ["Assassin's Creed Cyndicate", 'Hitman World of Assassination'],
        'The Flash': ['Injustice 2', 'Vanquish'],
        'Avengers: Infinity War': ['Spider-man PS4', "Marvel's Avengers"],
        'Pirates of the Caribbean': ['Sea of Thieves', 'Kingdom Hearts'],
        'Little Mermaid': ['Semblance', 'Pikuniku'],
        'Star Trek Beyond': ['Citizen Slepper', "No Man's Sky"],
        'Jurassic World': ['Jurassic World Evolution 2', 'Dino Crisis'],
        'Into the Wild': ['The Forest', 'Survival Kids']
    },
    'Comedy': {
        'Groundhog Day': ['Life Is Strange', '12 Minutes'],
        'Ace Ventura: Pet Detective': ['Stray', 'Untitled Goose Game'],
        'Tommy Boy': ['Life is Stranger', 'The Gardens Between'],
        '21 Jump Street': ['Sleeping Dogs', 'GTA 5'],
        "Bill and Ted's Excellent Adventure": [],
        'The Grand Budapest Hotel': [],
        'Bettlejuice': ["Luigi's Mansion", 'Phasmophobia'],
        'Clue': ['Danganronpa', 'Phoenix Wright Ace Attorney'],
        'Galaxy Quest': ['High On Life', 'Journey to the Savage Planet'],
        'Kung Fu Hustle': ['Judgment', 'Yakuza'],
        'Elf': ['Bubble-Charms', 'Daze before Christmas'],
        'Ghostbusters': ['Phasmophobia', "Luigi's Masion"],
        'Coming to America': ['Sniper Elite III', 'Resident Evil II'],
        'Clueless': ['Super Smash Bros', 'It Takes Two'],
        'Airplane': ['Falcon 4.0', 'War Thunder']
    },
    'Documentary': {
        'Queen Cleopatra': ["Assassin's Creed: Origins", 'Civilization 5'],
        'Missing: Dead or Alive': ['SoulCalibur', 'The King of Fighters'],
        'Planet Earth II': ['Universe Sandbox', 'Zelda: Breath of the Wild'],
        "The Last Dance": ['NBA 2K11', 'NBA Jam'],
        'Chimp Empire': ['Space Chimps', 'Ape Out'],
        '100 Foot Wave': ['Sea of Thieves', 'Subnautica'],
        'Roman Empire': ["Assassin's Creed: Origins", 'Ryse: Son of Rome'],
        'The Social Dilemma': ['The Last of Us', 'Fortnite'],
        'Faces of Death': ['Bloodborne', 'Dark Souls'],
        'Making a Murderer': ['Ace Attorney', 'Professor Waylon'],
        'The Deepest Breath': ['Beyond Blue', 'Hydrophobia'],
        'Forensic Files': ['CSI: Hard Evidence', "Where's the Killer Activity"],
        'The Rescue': ['Rocket League', 'Supper Soccer'],
        'The God Man': ['Hades', 'Too Human'],
        'Reggie': ['MLB the Show 21', 'Baseball Stars']
    },
    'Western': {
        'Broken Arrow': ['Fall Out: New Vegas', 'Gun'],
        'Magnificent Seven': ['Red Dead Revolver', 'Desperados III'],
        'For a Few Dollars More': ['Hard West', 'Evil West'],
        'The Harder They Fall': ['TimeSplitters 2', 'Gun.Smoke'],
        'Django': ['Red Redemption 2', 'Damnation'],
        'A Fist Full of Dollars': ['Old World Blues', 'Ground Zero: Texas'],
        'Terror on the Prairie': ['Tin Star', 'West of Loathing'],
        'Vengenance': ['Hunt', 'Sunset Riders'],
        'Brokeback Mountain': ['My Time at Portia', 'Mass Effect 3'],
        'Once Upon a Time in the West': ['Weird West', 'Rosewater'],
        'High Noon': ['Darkwatch: Cure of the West', 'Ground Zero: Texas'],
        'Silverado': ['Red Steel 2', 'The Oregon Trail'],
        'Hostiles': ['Highway Blossoms', 'Samurai Western'],
        'Tombstone': ['SteamWorld Dig', 'Gunman Chronicles'],
        'Rio Bravo': ['Piper']
    }
};


// Define the movie categories
var categories = Object.keys(movies);

// Define the folder paths for different genres
var folderPaths = [
    'img/movies/Action/',
    'img/movies/Adventure/',
    'img/movies/Comedy/',
    'img/movies/Documentary/',
    'img/movies/Horror/',
    'img/movies/Mystery/',
    'img/movies/Western/'
];

// Preload all images
var preloadImages = $('.head');
for (var i = 0; i < categories.length; i++) {
    var category = categories[i];
    var moviesInCategory = movies[category];
    for (var movie in moviesInCategory) {
        // remove spaces from movie name
        movie = movie.replace(/\s/g, '');
        var movieImageElement = $('<link rel="preload" href="img/movies/' + category + '/' + movie + '.png" as="image">');
        preloadImages.append(movieImageElement);
    }
}

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
        var moviesInCategory = Object.keys(movies[category]);

        for (var j = 0; j < moviesInCategory.length; j++) {
            var movie = moviesInCategory[j];
            // create another movie variable with the spaces removed
            var movieNoSpaces = movie.replace(/\s/g, '');
            var movieImage = $('<img src="img/movies/' + category + '/' + movieNoSpaces + '.png" alt="' + movie + '" data-category="' + category + '">');
            movieList.append(movieImage);
        }
    }
}

// Style Selected Movies
function styleSelectedMovies(movieElement, selectedMovies) {
    // If no movies are selected, remove all styles
    if (selectedMovies.length == 0) {
        movieElement.removeClass('dim');
        movieElement.removeClass('Action');
        movieElement.removeClass('Horror');
        movieElement.removeClass('Mystery');
        movieElement.removeClass('Adventure');
        movieElement.removeClass('Comedy');
        movieElement.removeClass('Documentary');
        movieElement.removeClass('Western');
        return;
    }
    
    var movieName = movieElement.attr('alt');
    
    // If the movie is selected, highlight it
    if (selectedMovies.includes(movieName)) {
        movieElement.removeClass('dim');
        if (movieElement.data('category') === 'Action') {
            // Highlight the clicked movie
            movieElement.addClass('Action');
        } else if (movieElement.data('category') == 'Horror') {
            movieElement.addClass('Horror');
        } else if (movieElement.data('category') == 'Mystery') {
            movieElement.addClass('Mystery');
        } else if (movieElement.data('category') == 'Adventure') {
            movieElement.addClass('Adventure');
        } else if (movieElement.data('category') == 'Comedy') {
            movieElement.addClass('Comedy');
        } else if (movieElement.data('category') == 'Documentary') {
            movieElement.addClass('Documentary');
        } else if (movieElement.data('category') == 'Western') {
            movieElement.addClass('Western');
        }
    } else {
        movieElement.addClass('dim');
    }
}

// Get the category of a movie by its title 
function getCategoryByMovieTitle(movieTitle) {
    for (var category in movies) {
      if (movies.hasOwnProperty(category)) {
        var moviesInCategory = movies[category];
        if (moviesInCategory.hasOwnProperty(movieTitle)) {
          return category;
        }
      }
    }
    return null; // Movie title not found in any category
}

$(document).ready(function() {
    
    // Define variables
    var popupMessage = $('#popupMessage');
    var infoIcon = $('#infoIcon');
    var closeButton = $('.close-button'); // Close popup button
    var boxes = $('.box'); // All boxes (genres)
    var gameButton = $('#gameButton'); // Generate game button
    var restartIcon = $('#restartIcon'); // Restart game search button
    var movieList = $('.movie-list'); // List of movies
    var selectedCategories = []; // Array to store selected categories
    var selectedMovies = []; // Array to store selected movies

    // Hide the popup message when the close button is clicked
    closeButton.on('click', function() {
        popupMessage.removeClass('active');
        boxes.css('margin-top', '20px');
        popupMessage.hide();
    });

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

        // Add category to list of selected categories
        if (isSelected) {
            selectedCategories.push(category);
        // Remove category from list of selected categories
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

        movieList.find('img').each(function() {
            var movieElement = $(this);
            styleSelectedMovies(movieElement, selectedMovies);
        });
        displayMovies(movieList);
    });

    // Clear the movie list
    movieList.empty();

    createMovieList(movieList);
    
    // Shuffle the movies
    shuffleMovies(movieList);
    
    // Display the movies
    displayMovies(movieList);

    // Attach hover event handler to movies
    movieList.on('mouseenter', 'img', function() {
        
        // Add the hovered class to the movie
        var movie = $(this);
        movie.addClass('hovered');

        // Get the movie name
        var movieName = movie.attr('alt');

        // Create a new popup message element
        var popupMessageElement = $('<div class="popup-movie" id="movieMessage"></div>');
        var messageContentElement = $('<div class="movie-content" id="movieContent"></div>');
        var movieNameElement = $('<p class="movie-title">' + movieName + '</p>');

        // Append the movie name and close button to the message content element
        messageContentElement.append(movieNameElement);
        popupMessageElement.append(messageContentElement);

        // Change the CSS of the popup message element
        popupMessageElement.css({
            // Make it appear directly on top of the movie (overlapping)
            position: 'absolute',
            top: movie.offset().top,
            left: movie.offset().left,
            // Make it the same size as the movie
            width: movie.width(),
            height: movie.height(),
            // Make it appear on top of the movie (overlapping)
            'z-index': 1,
        });

        // Append the popup message element to the movie
        $('body').prepend(popupMessageElement);

        // Attach the mouseout event handler to the popup message element
        movie.on('mouseleave', function() {
            // Remove the popup message from the movie
            popupMessageElement.remove();
            // Remove the hover class from the movie element
            movie.removeClass('hovered');
        });

        // Attach click event handler to popup message
        popupMessageElement.on('click', function(event) {
            event.stopPropagation(); // Prevent the click event from propagating to underlying elements
            var movie = movieList.find('img.hovered'); // Get the corresponding movie element
            movie.trigger('click'); // Trigger the click event on the movie element
        });

    });

    // Attach scroll event handler to movieList
    movieList.on('scroll', function() {
        // Remove the hovered class from all movies
        movieList.find('img.hovered').removeClass('hovered');
        // Remove the popup message from all movies
        $('body').find('.popup-movie').remove();
    });

    // Attach click event handler to movies
    movieList.on('click', 'img', function() {
        $(this).toggleClass('clicked');

        var movie = $(this);
        // Add movie to list of selected movies
        var movieName = movie.attr('alt');
        var isSelected = movie.hasClass('clicked');

        if (isSelected) {
            // Select the movie
            movie.addClass('selected');
            // Add the movie to the selectedMovies array if it's not already present
            if (!selectedMovies.includes(movieName)) {
                selectedMovies.push(movieName);
            }
        } else {
            // Deselect the movie
            movie.removeClass('selected');
            // Remove the movie from the selectedMovies array
            var movieIndex = selectedMovies.indexOf(movieName);
            if (movieIndex !== -1) {
                selectedMovies.splice(movieIndex, 1);
            }
            movie.removeClass('Action');
            movie.removeClass('Horror');
            movie.removeClass('Mystery');
            movie.removeClass('Adventure');
            movie.removeClass('Comedy');
            movie.removeClass('Western');
            movie.removeClass('Documentary');
        }

        // Apply styles based on the selectedMovies array
        movieList.find('img').each(function() {
            var movieElement = $(this);
            styleSelectedMovies(movieElement, selectedMovies);
        });
    });

    // Attach click event handler to the game button
    $('#gameButton').on('click', function() {
        var selectedGamesByGenre = {}; // Dictionary to hold selected games by genre
        console.log('Clicked Get Games button');

        gameButton.hide();
        restartIcon.show();

        // Iterate through each selected movie
        for (var i = 0; i < selectedMovies.length; i++) {
            var movieTitle = selectedMovies[i];
            var category = getCategoryByMovieTitle(movieTitle);
            console.log('Selected movie: ' + movieTitle);

            // Access the associated games for the selected movie
            var associatedGames = movies[category][movieTitle];

            // Create a game object with the category, movie title, and associated games
            var game = {
                category: category,
                movieTitle: movieTitle,
                gameTitles: associatedGames
            };

            // If the genre doesn't exist in the selectedGamesByGenre dictionary, create a new object for it
            if (!selectedGamesByGenre.hasOwnProperty(category)) {
                selectedGamesByGenre[category] = {};
            }

            // Add the game object to the corresponding genre and movie title in the dictionary
            selectedGamesByGenre[category][movieTitle] = game;
        }

        // Clear the game list
        $('.game-list').empty();

        // Display the associated games by genre and movie title below the button
        if (Object.keys(selectedGamesByGenre).length > 0) {
            var gameResultsText = "Here are your game results:";
            $('.game-results').html(gameResultsText);
            var gameListText = "";
            for (var genre in selectedGamesByGenre) {
                console.log('Genre: ' + genre);
                if (selectedGamesByGenre.hasOwnProperty(genre)) {
                    gameListText += '<br><div class="genre-container">';
                    gameListText += '<div class="genre-box">';
                    gameListText += '<h2>' + genre + ':</h2>';
                    var movieGames = selectedGamesByGenre[genre];
                    for (var movieTitle in movieGames) {
                        // Check if the movieGames object has the movieTitle property
                        if (movieGames.hasOwnProperty(movieTitle)) {
                            var game = movieGames[movieTitle];
                            // If there are multiple games, display them in a list
                            for (var i = 0; i < game.gameTitles.length; i++) {
                                gameListText += '<div class="game-box">';
                                gameListText += '<h3 class="game-title" data-original-title="' + game.gameTitles[i] + '">' + game.gameTitles[i] + '</h3>';
                                gameListText += '<span class="movie-title">' + movieTitle + '</span>';
                                gameListText += '</div>';
                            }
                        }
                    }
                    gameListText += '</div>';
                }
            }

            // Display the game results
            $('.game-list').html(gameListText);

            $('.game-title').siblings('.movie-title').hide();

            // Add hover functionality to game titles to show movie title
            $('.game-title').hover(function() {
                var movieTitle = $(this).siblings('.movie-title').text();
                $(this).text(movieTitle);
            }, function() {
                var originalTitle = $(this).data('original-title');
                $(this).text(originalTitle);
                $(this).siblings('.movie-title').hide();
            });
        } else {
            var noGameResultsText = "No games found for the selected movies.";
            $('.game-results').text(noGameResultsText);
        }

    });

    // Attach click event handler to the restart icon
    restartIcon.on('click', function() {
        // Refresh the page
        location.reload();
    });
});
