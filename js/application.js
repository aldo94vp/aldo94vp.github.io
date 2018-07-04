$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});
  $('.nav a').on('click', function(){
    $('#navbarCV').collapse('hide');
  });
  $('#logo, .name').fadeOut(1);
  rotatePersonalSkills.init();
  scrollspyAnimate.init();
  setColorNavbar.init();
  HeightSections.init();
});

var HeightSections = {
  init: function() {
    this.setHeight();
    this.checkHeightForMobile();
    this.checkHeightResize();
  },
  setHeight: function() {
    $('div.section').css('height', this.checkHeight() + 50);
  },
  checkHeightForMobile: function() {
    if(this.checkHeight() >= 681){
      this.setHeight();
      //$('#software-section').css('height', ''+ (this.checkHeight())*1.15  );
    }else if (this.checkHeight() >= 500 && this.checkHeight() <= 680) {
      $('#software-section').css('height', ''+ (this.checkHeight())*1.3  );
    }else{
      $('#education-section').css('height', ''+ (this.checkHeight())*1.3  );
      $('#software-section').css('height', ''+ (this.checkHeight())*1.6  );
    }
  },
  checkHeightResize: function() {
    if(this.checkHeight() >= 768){
      $(window).resize(function() {
        this.setHeight();
      });
    }
  },
  checkHeight: function() {
    return $(window).outerHeight(true);
  }
}

var rotatePersonalSkills = {
  init: function() {
    var skills = $('.skill');
    for (var i = 0; i < skills.length; i++) {
      var randomNumber = (Math.round(Math.random()) == 1) ? (Math.floor(Math.random() * (360 - 320 + 1)) + 320) : (Math.floor(Math.random() * (40 + 1)))
      $(skills[i]).css({
        '-ms-transform': 'rotate('+randomNumber+'deg)',
        '-webkit-transform': 'rotate('+randomNumber+'deg)',
        'transform': 'rotate('+randomNumber+'deg)'
      });
    }
  }
};

var scrollspyAnimate = {
  init: function(){
    $("#navbarCV a").on('click', function(event){
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({ scrollTop: $(hash).offset().top },
        800, function(){
          window.location.hash = hash;
        });
      }
    });
  }
}

var setColorNavbar = {
  init: function() {
    $(".navbar").on("activate.bs.scrollspy", function(){
      var x = $(".nav li.active > a").text();
      var color, displayProp;
      switch (x) {
        case 'About':
        $('#logo, #name').fadeOut(250);
        displayProp = "none";
        color = 'transparent';
        break;
        case 'Education':
        $('#logo, #name').fadeIn(100);
        displayProp = 'block';
        color = '#A52023';
        break;
        case 'Software':
        $('#logo, #name').fadeIn(100);
        displayProp = 'block';
        color = '#2C3E50';
        break;
        case 'Skills':
        $('#logo, #name').fadeIn(100);
        displayProp = 'block';
        color = '#2A2C2B';
        break;
        case 'Contact':
        $('#logo, #name').fadeIn(100);
        displayProp = 'block';
        color = '#FF6138';
        break;
        default:
        $('#logo, #name').fadeIn(100);
        displayProp = 'block';
        color = '#296ad4';
      }
      $('.navbar-blue').css({
        backgroundColor: color,
        display: displayProp
      });
      $("meta[name='theme-color']").attr('content', color);
    });
  }
}
