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
  

if(window.innerWidth < 1024){
  document.getElementById('openOverlayBtn').addEventListener('click', function() {
    document.getElementById('overlay2').style.display = 'block';
    
})};

document.getElementById('closeOverlayBtn').addEventListener('click', function() {
    document.getElementById('overlay2').style.display = 'none';
});


if(window.innerWidth < 1024){
document.getElementById('openOverlayBtn2').addEventListener('click', function() {
    document.getElementById('overlay3').style.display = 'block';
})};

document.getElementById('closeOverlayBtn2').addEventListener('click', function() {
  document.getElementById('overlay3').style.display = 'none';
});



function overlayopen()
{
    document.getElementById('openOverlayBtn2').addEventListener('click', function() {
        document.getElementById('overlay3').style.display = 'block';
    });
    
    document.getElementById('closeOverlayBtn2').addEventListener('click', function() {
      document.getElementById('overlay3').style.display = 'none';
    });

}





window.addEventListener('scroll', function() {
  var fixedDiv = document.getElementById('fixedDiv');
  if (window.scrollY >= 350) {
    fixedDiv.style.display = 'block';
  } else {
    fixedDiv.style.display = 'none';

  }
});






window.onscroll = function()
{
  checkScreenWidth();
}

  checkScreenWidth();

  function checkScreenWidth() {

    let screenWidth = window.innerWidth;
    let navbar = document.getElementById("banner");

    if (screenWidth >= 1200 && document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      navbar.classList.add("banner-fullscreen");
      console.log('Ekran o szerokości min. 1200px');
    } else {
      navbar.classList.remove("banner-fullscreen");
      console.log('Ekran o szerokości mniejszej niż 1200px');
    }
  }

window.addEventListener('resize',"scroll", checkScreenWidth);




function toggleOptions() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth > 1024) {
      const delivery2 = document.querySelector('.delivery2');
      delivery2.classList.toggle('active');
  }
}


function toggleClass(address) {
  var element = document.getElementById(address);
  element.classList.toggle('highlighted');
}


