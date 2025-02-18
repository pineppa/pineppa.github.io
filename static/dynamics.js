var navbarInit = function navbarInit() {
    var navbar = document.querySelector('[data-navbar-dark-on-scroll]');
    var navBurger = document.querySelector('[data-bs-toggle]');
  
    if (navbar) {
      var windowHeight = window.innerHeight;
  
      var handleAlpha = function handleAlpha() {
        var scrollTop = scrollY;
        var alpha = scrollTop / windowHeight * 2;
        alpha >= 1 && (alpha = 1);
        navbar.style.backgroundColor = "rgba(0, 0, 0, ".concat(alpha, ")");
      };
  
      handleAlpha();
      document.addEventListener('scroll', function () {
        return handleAlpha();
      }); // Top navigation background toggle on mobile
    }
  };

  navbarInit()