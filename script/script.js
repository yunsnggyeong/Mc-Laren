const progressBarFill = document.querySelector(".progress-bar-fill");
    const progressText = document.querySelector(".progress-text");
    var swiper = new Swiper(".sec_1_swiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressBarFill.style.width = `${(1 - progress) * 100}%`;
        },
        slideChange(s) {
          
          document.querySelectorAll(".txt-box").forEach((box) => {
            box.classList.remove("animate");
          });
          
          const activeSlide = s.slides[s.activeIndex];
          const txtBox = activeSlide.querySelector(".txt-box");
          if (txtBox) {
            txtBox.classList.add("animate");
          }
          
          progressText.textContent = `${s.realIndex + 1}/${s.slides.length}`;
        },
        init(s) {
          
          const activeSlide = s.slides[s.activeIndex];
          const txtBox = activeSlide.querySelector(".txt-box");
          if (txtBox) {
            txtBox.classList.add("animate");
          }
          
          progressText.textContent = `1/${s.slides.length}`;
        }
      }
    });

    // sec_1 slide 
    
    document.addEventListener('DOMContentLoaded', () => {
      const sec2Cons = document.querySelectorAll('.sec_2_con');

      const observerOptions = {
          root: null, 
          rootMargin: '0px',
          threshold: 0.1 
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate-in');
                  observer.unobserve(entry.target); 
              }
          });
      }, observerOptions);

      sec2Cons.forEach(con => {
          observer.observe(con);
      });
  });

    // sec_2 animate end



    var swiper = new Swiper(".sec_3_swiper_wrap", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        900: {  
            slidesPerView: 2,
          },
        1280: {  
            slidesPerView: 2.5,
          },  
        1600: {  
            slidesPerView: 3,
          },
        }
    });

    // sec_3 swiper end

    