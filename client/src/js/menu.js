menu.addEventListener("click", () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        menu.className = "topnav";
    }
});