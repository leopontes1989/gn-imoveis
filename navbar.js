function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.querySelector(".active");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block"
    } else {
      x.style.display = "block";
      y.style.display = "none";
      
    }

    
}