const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const navLinks = document.querySelectorAll('.header-nav a, .container > a');

navLinks.forEach(link => {
  const linkHref = link.getAttribute('href');

  if (linkHref === currentPage) {
    link.classList.add('active'); 
  }
})

const btnburger = document.querySelector('.burger');
const mobileContainer = document.querySelector('.mobile-container');
const toggleMobileMenu = () => {
  mobileContainer.classList.toggle('show');
  btnburger.classList.toggle('active');
}
btnburger.addEventListener('click', toggleMobileMenu);

const bannerSlider = new Swiper('.banner-slider', {
  speed: 900,
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const carouselWeekly = new Swiper('.carousel-weekly', {
  speed: 700,
  slidesPerView: 'auto',
  spaceBetween: 28,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.weekly-button-next',
    prevEl: '.weekly-button-prev',
  },
  breakpoints: {
    1025: {
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".gallery", {
  speed: 700,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const percent = document.querySelectorAll('[class*="__percent"]'); 
percent.forEach(item => {
  let string = item.textContent 
  let stringComa = /,/g;
  let stringPercent = /%/gi; 
  let refactoringString = string
    .replace(stringComa, '.') 
    .replace(stringPercent, '') 
    .replace(/\s/g, ''); 
  let val = Number(refactoringString); 
  if (val > 0) {
    item.classList.add('percent-totop');
  } else if (val < 0) {
    item.classList.add('percent-tobottom');
  } else {
    item.classList.add('percent-zero');
  }
})

function toggleFollow(button) {
  if (button.classList.contains('unfollow')) {
    button.classList.remove('unfollow');
    button.textContent = 'Follow';
  } else {
    button.classList.add('unfollow');
    button.textContent = 'Unfollow';
  }
}

function initializeButtonsInWidget(widgetSelector) {
  const widget = document.querySelector(widgetSelector);
  if (!widget) return; 

  const buttons = widget.querySelectorAll('.btn');
  buttons.forEach(button => {
    if (button.classList.contains('unfollow')) {
      button.textContent = 'Unfollow';
    } else {
      button.textContent = 'Follow';
    }
  });
}

initializeButtonsInWidget('.best-sellers');

document.querySelector('.history-back')?.addEventListener('click', (event) => {
  window.history.back();
});

$(document).ready(function(){
  $('select').niceSelect();
  $(".nice-select .list .option").on("click", function () {
    const niceSelectContainer = $(this).closest(".nice-select");
    niceSelectContainer.addClass("selected");
  });
});

if (document.querySelector('.widget')) {
  installWidget();
}

if (document.querySelector('.tabs')) {
  installTab();
}

if (document.querySelector('.accordion')) {
  installAccordion();
}
