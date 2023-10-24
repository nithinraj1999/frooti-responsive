document.addEventListener('DOMContentLoaded', function () {
    
var rotatingImage = document.getElementById('rotatingImage');   
window.addEventListener('scroll', function () {  
var scrollPosition = window.scrollY;
rotatingImage.style.transform = 'rotate(' + scrollPosition + 'deg)';
    });
});