const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-wrapper');

const slide = document.querySelector('.slide');
const prev = document.querySelector('.arrow1');
const next = document.querySelector('.arrow2');
const sliderDots = document.querySelector('.slider-dots');

const images = [
  'step.jpg',
  'sololearn-js.jpg',
  'sololearn-css.jpg',
  'sololearn-html.jpg',
  'netology-js.jpg',
  'netology-html.jpg',
];
let index = 0;

const toggleMenu = () => {
  menu.classList.toggle('open');
  menu.querySelector('.menu').classList.toggle('open');
  if (menu.classList.contains('open')) {
    burger.querySelector('.center').style.backgroundColor = 'transparent';
    burger.querySelector('.before').style.transform = 'rotate(45deg)';
    burger.querySelector('.after').style.transform = 'rotate(-45deg)';

  } else {
    burger.querySelector('.center').style.backgroundColor = 'white';
    burger.querySelector('.before').style.transform = 'none';
    burger.querySelector('.after').style.transform = 'none';
  }
};

const goCurrentSlide = (index) => {
  const dots = document.querySelectorAll('.dot');

  slide.src = 'img/' + images[index];
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[index].classList.add('active');
};

const goPrev = () => {
  if (index > 0) {
    index--;
  } else if (index == 0) {
    index = images.length - 1;
  }
  goCurrentSlide(index);
};
const goNext = () => {
  if (index < images.length - 1) {
    index++;
  } else if (index == images.length - 1) {
    index = 0;
  }
  goCurrentSlide(index);
};

const goSlider = () => {
  prev.addEventListener('click', goPrev);
  next.addEventListener('click', goNext);
};
const createDots = () => {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i == index) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      index = i;
      goCurrentSlide(index);
    });
    sliderDots.append(dot);
  }
};

const onLoad = () => {
  burger.addEventListener('click', toggleMenu);
  menu.addEventListener('click', toggleMenu);
  menu.querySelector('.menu').addEventListener('click', (event) => {
    event.stopPropagation();
  });
  menu.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', toggleMenu);
  });

  goSlider();
  createDots();
};
window.addEventListener('load', onLoad);
