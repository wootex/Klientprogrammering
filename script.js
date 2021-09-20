// Körs när sidans DOM-träd har laddat klart
$(document).ready(function () {

    // Script för drop down från meny-ikon, visar och döljer med animering
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

    /* automatic slideshow (ska göras om till JQ och metoden .each() )*/
    var pauseButton = document.getElementById('pause');
    var playing = true;
    var slideIndex = 0;
    var i;
    var x = document.getElementsByClassName("slidePic");
    var y = document.getElementsByClassName("slidePic2");
    setInterval(nextPic, 2000);
    nextPic2();
    nextPic();


    function pauseSlideshow() {
        pauseButton.innerHTML = "Play";
        playing = false;




    }

    function playSlideShow() {
        pauseButton.innerHTML = "Pause";
        playing = true;


    }

    pauseButton.onclick = function () {
        if (playing) { pauseSlideshow(); }
        else { playSlideShow(); }


    }

    function nextPic() {

        if (playing == false) { return; }



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

        var i;

        for (i = 0; i < y.length; i++) {

            y[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > y.length) { slideIndex = 1 }
        y[slideIndex - 1].style.display = "block";


    }

});


