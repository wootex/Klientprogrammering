$(document).ready(function(){


$("#menuImg").on("click", function (e) {
    e.stopPropagation();
    if ($("#menu").attr("class") === "hidden") {
        $("#menu").addClass("show");
        $("#menu").removeClass("hidden");
    }
    else {
        $("#menu").addClass("hidden");
        $("#menu").removeClass("show");
    }
});

/* automatic slideshow homepage */
var slideIndex = 0;
nextPic();
function nextPic() {
    var i;
    var x = document.getElementsByClassName("slidePic");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(nextPic, 2500);
}



});