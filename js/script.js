let navbar = document.querySelector('.header .navbar');
// let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
  //  loginForm.classList.remove('active');
};



// document.querySelector('#login-btn').onclick = () =>{
//    loginForm.classList.toggle('active');
//    navbar.classList.remove('active'); 
// };

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
  //  loginForm.classList.remove('active');
  //  contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   autoplay : {
    delay: 6000,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   autoplay: {
    delay:3000,
    disableOnInteraction:false
   },
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});



// shadow on navbar 

// window.addEventListener("scroll", () => {
//    document.querySelector('navbar').classList.toggle('box_shadow', window.scrollY > 0);
//  }) 








// -------------- add avtive link  --------------

// const navItms = document.querySelector('navbar')

// const changeActiveItms = () => {
//   navItms.forEach(item => {
//     const link = item.querySelector('a')
//     link.classList.remove('active')

//   })
// };



// navItms.forEach(item => {
//   const link = item.querySelector('a');
//   link.addEventListener('click', () => {
//     changeActiveItms()
//     link.classList.add('active')
//   })
// })



