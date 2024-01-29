document.querySelectorAll(".swiper").forEach((each) => {
    let slidenum = each.querySelectorAll(".swiper-slide").length;
  
    let flag = slidenum > 3 ? true : false;
  
    let swiper = new Swiper(each, {
      enabled: flag,
      navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      slidesPerView: 1,
      loop: true,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320
            768: {
              slidesPerView: 3.3,
              spaceBetween: 30
            },
            // when window width is >= 480px
        }
    });
    
  });