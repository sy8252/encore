let list = document.querySelector('.slider .list');
let banners = document.querySelectorAll('.slider .list .banner');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let totalBanners = banners.length;

next.onclick = function() {
    active = (active + 1) % totalBanners;  
    reloadSlider();
}

prev.onclick = function() {
    active = (active - 1 + totalBanners) % totalBanners;  
    reloadSlider();
}

let refreshSlider = setInterval(()=> {next.click()}, 3000);
function reloadSlider() {
    let newLeft = -active * 100 + '%';  
    list.style.transition = 'left 0.5s ease-in-out';
    list.style.left = newLeft;

    banners.forEach(banner => banner.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    banners[active].classList.add('active');
    dots[active].classList.add('active');
}



  /*
  document.addEventListener('scroll', () => {
    const header = document.querySelector('.header-container');
  
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }); 
  */ 
  
/*let header = document.querySelector('.header-container');

document.addEventListener('scroll', () => {
    window.scrollY > 0 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
}); 
*/