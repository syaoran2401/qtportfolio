$(document).ready(function ($) {

  $('.scroll-link').click(function (e) {
    e.preventDefault()
    $id = $(this).attr('href');
    $('body,html').animate({
      scrollTop: $($id).offset().top - 20
    }, 750);
  });

  //Header link
  const liHeader = $('.nav-item');
  const mainNav = $('.navbar');
  for (let i = 0; i < liHeader.length; i++) {
    liHeader[i].addEventListener('click',  () => {
      let currentActive = $('.activeHeader');
      currentActive = currentActive.removeClass('activeHeader').addClass('');
      $(this).addClass('activeHeader')
    })
  }


  //scroll active nav link
  $(window).scroll( () => {
    let currentPos = $(window).scrollTop()
    if (currentPos <= 100) {
      liHeader.removeClass('activeHeader');
      $('.sectionHome').addClass('activeHeader')
    } else if (currentPos >= 300 && currentPos <= 1100) {
      liHeader.removeClass('activeHeader');
      $('.sectionAbout').addClass('activeHeader')
    } else if (currentPos >= 1200 && currentPos <= 2100) {
      liHeader.removeClass('activeHeader');
      $('.sectionSkills').addClass('activeHeader')
    } else if (currentPos >= 2300 && currentPos <= 3300) {
      liHeader.removeClass('activeHeader');
      $('.sectionPortfolio').addClass('activeHeader')
    } else if (currentPos >= 3500) {
      liHeader.removeClass('activeHeader');
      $('.sectionContact').addClass('activeHeader')
    }

    if (currentPos >= 300) {
      $('#home__logo').css('display', 'none');
      $('#active__logo').css('display', 'block');
    } else {
      $('#active__logo').css('display', 'none');
      $('#home__logo').css('display', 'block');
    }

  })


  // resize banner size
  $(window).resize(function () {
    $('.banner').height($(window).height());
  });

  $(window).trigger('resize');


  $('#name').focus(() => {
    $('.name').removeClass('inActive');
    $('.name').addClass('active');
  }).blur(() => {
    $('.name').removeClass('active');
    $('.name').addClass('inActive');
  });



  $('#email').focus(() => {
    $('.email').removeClass('inActive');
    $('.email').addClass('active');
  }).blur(() => {
    $('.email').removeClass('active');
    $('.email').addClass('inActive');
  });


  $('#subject').focus(() => {
    $('.subject').removeClass('inActive');
    $('.subject').addClass('active');
  }).blur(() => {
    $('.subject').removeClass('active');
    $('.subject').addClass('inActive');
  });


  $('#message').focus(() => {
    $('.message').removeClass('inActive');
    $('.message').addClass('active');
  }).blur(() => {
    $('.message').removeClass('active');
    $('.message').addClass('inActive');
  });


  let showEmptyErrMess = () => {
    $('.errorName__message').html("Field can't be empty !");
    $('.errorName__message').css('display', 'block');
    $('.name').css("transform", "translateY(0px)");
  }

  let hideEmptyErrMess = () => {
    $('.errorName__message').css('display', 'none');
    $('.name').css("transform", "translateY(-29px)");
  }


  // Contact Validation
  let checkEmptyInput = (name) => {
    if (name.trim() === '') {
      showEmptyErrMess();
    } else {
      hideEmptyErrMess();
    }
  };

  $('#name').keyup(() => {
    const nameValue = $('#name').val();
    checkEmptyInput(nameValue);
  });



  let checkEmail = (emailValue) => {
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(emailValue)) {
      $('.errorEmail__message').html("Email is invalid !");
      $('.errorEmail__message').css('display', 'block');
      $('.email').css("transform", "translateY(0px)");
    } else {
      $('.errorEmail__message').css('display', 'none');
      $('.email').css("transform", "translateY(-29px)");
    }

    if (emailValue !== '') {
      $('.email').css("transform", "translateY(-29px)");
    }
  };


  $('#email').keyup(() => {
    const emailValue = $('#email').val();
    checkEmail(emailValue)
  });



  $('#subject').keyup(() => {
    const subjectValue = $('#subject').val();
    if (subjectValue === '') {
      $('.subject').css("transform", "translateY(0px)");
    }
    else {
      $('.subject').css("transform", "translateY(-29px)");
    }
  });


  $('#message').keyup(() => {
    const messageValue = $('#message').val();
    if (messageValue === '') {
      $('.message').css("transform", "translateY(0px)");
    }
    else {
      $('.message').css("transform", "translateY(-29px)");
    }
  });


});

new WOW().init();

//loading icon
window.addEventListener('load', function () {
  const bodyContent = document.querySelector('.page-wrapper');
  const loader = document.querySelector('#loading');
  const bodyDiv = document.querySelector('body');

  setTimeout(() => {
    loader.className += 'hidden';
    bodyDiv.style.overflow = 'visible'
    bodyContent.style.opacity = "1";
  }, 500)
})


// RUNNING WORDs
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};


window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};


// OWL CAROUSEL
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
