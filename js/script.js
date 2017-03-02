document.addEventListener('DOMContentLoaded',function(){

  var circleBackground = document.getElementsByClassName('circle-background')[0];
  circleBackground.style.top = getRandomIntInclusive(0,50) + '%';
  circleBackground.style.bottom = getRandomIntInclusive(0,50) + '%';
  circleBackground.style.left = getRandomIntInclusive(0,50) + '%';
  circleBackground.style.right = getRandomIntInclusive(0,50) + '%';
  console.log(circleBackground.style.top + " : " + circleBackground.style.right + " : " + circleBackground.style.bottom + " : " + circleBackground.style.left);

  // Getting a random integer between two values, inclusive
  // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

});
