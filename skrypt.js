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
  


  document.getElementById('openOverlayBtn').addEventListener('click', function() {
    document.getElementById('overlay2').style.display = 'block';
});

document.getElementById('closeOverlayBtn').addEventListener('click', function() {
    document.getElementById('overlay2').style.display = 'none';
});



document.getElementById('openOverlayBtn2').addEventListener('click', function() {
    document.getElementById('overlay3').style.display = 'block';
});

document.getElementById('closeOverlayBtn2').addEventListener('click', function() {
  document.getElementById('overlay3').style.display = 'none';
});







window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var openOverlayBtn = document.getElementById("openOverlayBtn");

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      openOverlayBtn.style.position = "fixed";
      openOverlayBtn.style.width = "100%";
      openOverlayBtn.style.top = "0";
  } else {
      openOverlayBtn.style.position = "relative";
      openOverlayBtn.style.width = "auto";
  }
}