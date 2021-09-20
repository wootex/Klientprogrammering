
$(document).ready(function () {

var pauseButton = document.getElementById('pause');
    var pauseButton2 = document.getElementById('pause2');
    var playing = true;
    var slideIndex = 0;
    var i;
    var x = document.getElementsByClassName("slidePic");
    var y = document.getElementsByClassName("slidePic2");
    setInterval(nextPic, 2000);
    setInterval(nextPic2, 2000);
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