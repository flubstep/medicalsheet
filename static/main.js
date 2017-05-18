window.addEventListener('load', function() {

  var imageOverlay = document.getElementById('image-overlay');
  imageOverlay.addEventListener('click', function() {
    imageOverlay.className = 'leaving';
    setTimeout(function() {
      imageOverlay.className = '';
      imageOverlay.innerHTML = '';
    }, 200);
  });

  _.map(document.getElementsByTagName('img'), function(img) {
    img.addEventListener('click', (function(e) {
      e.stopPropagation();
      var clicked = e.target;
      var newImage = clicked.cloneNode();
      imageOverlay.appendChild(newImage);
      imageOverlay.className = 'active';
    }).bind(img));
  });
});