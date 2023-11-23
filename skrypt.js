// Dodajemy obsługę zamykania menu po kliknięciu w overlay
document.getElementById('overlay').addEventListener('click', function() {
    toggleMenu();
    toggleOverlay();
  });
  
  document.getElementById('menuToggle').addEventListener('click', function(event) {
    event.stopPropagation(); // Zatrzymujemy propagację kliknięcia, aby nie zamykać od razu po otwarciu
    toggleMenu();
    toggleOverlay();
  });
  
  document.querySelectorAll('.menu li').forEach(function(item) {
    item.addEventListener('click', function() {
      toggleMenu();
      toggleOverlay();
    });
  });
  
  // Dodajemy nasłuchiwanie kliknięcia na cały dokument
  document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var menuToggle = document.getElementById('menuToggle');
    
    // Sprawdzamy czy kliknięcie nastąpiło poza menu i poza przyciskiem otwierającym
    if (event.target !== menu && event.target !== menuToggle) {
      // Zamykamy menu tylko jeśli jest otwarte
      if (menu.style.left === '0px') {
        toggleMenu();
        toggleOverlay();
      }
    }
  });
  
  function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.left === '0px') {
      menu.style.left = '-290px';
    } else {
      menu.style.left = '0px';
    }
  }
  
  function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
  }
  

  /*
    <nav class="menu">

    <div class="left">

        <div class="signup-container">
        <a class="signup">Sign up</a>
        <div id="fill"></div>
        <a id="login">Log in</a>
        </div>

        <div class="linklist">
            <ul>
                <li><a id="linklist" href="//www.uber.com/business/eats">Create a business account</a></li>
                <li><a id="linklist" href="//merchants.ubereats.com/s/signup/">Add your restaurant</a></li>
                <li><a id="linklist" href="//www.uber.com/drive/delivery/">Sign up to deliver</a></li>
            </ul>
        </div>
    </div>

    <div class="right"></div>

    </nav> */