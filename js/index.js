
// window.onload = function() {
//   showLoading();
// }

function myFunction() {
    let x = document.getElementById("myLinks");
    let y = document.querySelector(".active");

    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";


    } else {
      x.style.display = "block";
      y.style.display = "none";
    }

    
}