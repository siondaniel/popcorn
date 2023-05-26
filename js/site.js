// site.js - Popcorns main javascript file
// Author: Sion Daniel
// Date: 05/26/2023

$(document).ready(function() {
    var popupMessage = $('#popupMessage');
    var infoIcon = $('#infoIcon');
    var closeButton = $('.close-button');
    var boxes = $('.box');

    // Hide the popup message when the close button is clicked
    closeButton.on('click', function() {
        popupMessage.hide();
    });

    //If the popup message is visible, hide it when the user clicks anywhere else on the page
    $(document).mouseup(function(event) {
        if (popupMessage.is(':visible')) {
            if (!popupMessage.is(event.target) && popupMessage.has(event.target).length === 0) {
                popupMessage.hide();
            }
        }
    });

    // Show the popup message when the info icon is clicked
    infoIcon.on('click', function() {
        popupMessage.show();
    });

    // Toggle the clicked class when a box is clicked
    boxes.on('click', function() {
        $(this).toggleClass('clicked');

        // Assign a unique color class to the clicked box
        var colors = ['Adventure', 'Comedy', 'Action', 'Western', 'Documentary', 'Horror', 'Mystery'];
        var index = $(this).index() % colors.length;
        $(this).removeClass(colors.join(' ')).addClass(colors[index]);
    });

});
