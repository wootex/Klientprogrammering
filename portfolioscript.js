$(document).ready(function () {
    
    $("#menuIcon").on("click", function () {
        var dropdown = $("#wrapperDropdown");

        if (dropdown.attr("class") === "hidden") {
            $("#menuIcon").addClass("open");
            dropdown.removeClass("hidden");

            dropdown.animate({
                height: "100%"
            }, 150, function () {
                dropdown.addClass("show");
            });
        }
        else {
            dropdown.animate({
                height: "0%"
            }, 150, function () {
                dropdown.addClass("hidden").removeClass("show");
            });

            $("#menuIcon").removeClass("open");
        }
    });

    var pauseButton = document.getElementById('pause');
    var pauseButton2 = document.getElementById('pause2');
    var playing = true;
    var slideIndex = 0;
    var i;
    var x = document.getElementsByClassName("slidePic1");
    var y = document.getElementsByClassName("slidePic2");
    setInterval(nextPic1, 1500);
    setInterval(nextPic2, 1500);
    nextPic2();
    nextPic();

    function pauseSlideshow() {
        pauseButton.innerHTML = "Play";
        pauseButton2.innerHTML = "Play";
        playing = false;
    }

    function playSlideShow() {
        pauseButton.innerHTML = "Pause";
        pauseButton2.innerHTML = "Pause";
        playing = true;
    }

    pauseButton.onclick = function () {
        if (playing) { pauseSlideshow(); }
        else { playSlideShow(); }
    }


    pauseButton2.onclick = function () {
        if (playing) { pauseSlideshow(); }
        else { playSlideShow(); }
    }

    function nextPic1() {
        if (playing == false) { 
            return; 
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) { slideIndex = 1 }
        x[slideIndex - 1].style.display = "block";
    }

    function nextPic2() {
        if (playing == false) {
            return;      
        }
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > y.length) { slideIndex = 1 }
        y[slideIndex - 1].style.display = "block";
    }
});