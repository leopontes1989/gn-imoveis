
// window.onload = function() {
//   showLoading();
// }

function myFunction() {
    let x = document.getElementById("myLinks");
    let y = document.querySelector(".active");
    let z = document.querySelector(".video");

    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";


    } else {
      x.style.display = "block";
      y.style.display = "none";
    }

    
}

// Menu Hamburguer

function onClickMenu() {
  document.getElementById('menu').classList.toggle('change');
  document.getElementById('nav').classList.toggle('change');
  document.getElementById('menu-bg').classList.toggle('change-bg');
}

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(evt) {
  if (evt.type === 'touchstart') evt.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  evt.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
      evt.currentTarget.setAttribute('aria-label', 'Fechar menu');
  } else {
      evt.currentTarget.setAttribute('aria-label', 'Fechar menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);