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
  
      navbar.addEventListener('show.bs.collapse', function (e) {
        e.currentTarget.classList.toggle('bg-dark');
      });
      navbar.addEventListener('hide.bs.collapse', function (e) {
        e.currentTarget.classList.toggle('bg-dark');
      });
    }
  
    if (navBurger) {
      navBurger.addEventListener('click', function () {
        navBurger.classList.toggle('is-active');
      });
    }
  };

  navbarInit()