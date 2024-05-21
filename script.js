const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)


})

let swiper = new Swiper(".home-slider", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

$(document).ready(function() {
    $(window).on('scroll load', function() {
        $('menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if ($(window).scrollTop() > 60) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
        $('section').each(function() {
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});

// Popup

const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
    closePopup.addEventListener("click", () => {
        popup.classList.add("hide-popup");
    });
    window.addEventListener("load", () => {
        setTimeout(() => {
            popup.classList.remove("hide-popup");
        }, 1000);
    });
}

// Media
$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });
});

//formularios
$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    $('#login-toggle').click(function() {
        $('#register-container').removeClass('active');
        $('#login-container').addClass('active');
    });

    $('#register-toggle').click(function() {
        $('#login-container').removeClass('active');
        $('#register-container').addClass('active');
    });
});
