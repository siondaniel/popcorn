// site.js - Popcorns main javascript file
// Author: Sion Daniel
// Date: 05/26/2023

$(document).ready(function() {
  var popupMessage = $('#popupMessage');
  var infoIcon = $('#infoIcon');
  var closeButton = $('.close-button');

  closeButton.on('click', function() {
    popupMessage.hide();
  });

  infoIcon.on('click', function() {
    popupMessage.show();
  });
});
