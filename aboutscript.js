// Körs när sidans DOM-träd har laddat klart
$(document).ready(function() {

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

// Knappar som länkar till personliga sidor
$(".namesItem").on("click", function(e){
    var input = $(e.target).text();

    switch (input) {
        
        case "Noel Lindgren":
        window.open("noel.html", "_self");
        break;

        case "Victor Hultqvist":
        window.open("victor.html", "_self");
        break;

        case "André Rehnström":
        window.open("andre.html", "_self");
        break;

        case "Anton Lyrberg":
        window.open("anton.html", "_self");
        break;

        default:
        alert("error", "_self");
        break;
    }
});



});