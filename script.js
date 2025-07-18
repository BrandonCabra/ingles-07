window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  let parallaxImages = document.querySelectorAll('.parallax-image');

  parallaxImages.forEach(function(image) {
    let speed = image.parentElement.dataset.speed || 0.5; // Velocidad de desplazamiento (opcional)
    image.style.backgroundPositionY = -(offset * speed) + 'px';
  });
});