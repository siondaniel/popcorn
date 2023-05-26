// site.js - Popcorns main javascript file
// Author: Sion Daniel
// Date: 05/26/2023

function closePopup() {
    var popupMessage = document.getElementById('popupMessage');
    popupMessage.style.display = 'none';
}
  
window.addEventListener('DOMContentLoaded', function() {
    var popupMessage = document.getElementById('popupMessage');
    popupMessage.style.display = 'block';
});
