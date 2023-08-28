
/*HOWLER JS*/
var sound = new Howl({
  src: ['https://tonos123.com/wp-content/uploads/2020/07/Sencha.mp3'],
  html5: true
});

sound.play();


/*ANIME JS*/
var numberOfEls = 200;
var duration = 9000;
var midScreenX = window.innerWidth / 2;
var midScreenY = window.innerHeight / 2;
var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
var fragment = document.createDocumentFragment();

for (var i = 0; i < numberOfEls; i++) {
  var hue = Math.round(360 / numberOfEls * i);
  var angle = Math.random() * Math.PI * 2;
  var el = document.createElement('div');
  el.classList.add('particule');
  el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
  el.style.width = '1px';
  el.style.height = '1px';
  anime({
    targets: el,
    width: ['1px', '10px'],
    height: ['1px', '10px'],
    left: [midScreenX + 'px', Math.cos(angle) * radius + midScreenX + 'px'],
    top: [midScreenY + 'px', Math.sin(angle) * radius + midScreenY + 'px'],
    delay: (duration / numberOfEls) * i,
    duration: duration,
    easing: 'easeInExpo',
    loop: true
  });
  fragment.appendChild(el);
}

document.body.appendChild(fragment);


// SWIPER//
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});