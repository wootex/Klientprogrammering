// Körs när sidans DOM-träd har laddat klart
$(document).ready(function() {


    // Script för mouseover/out menyikoner
    $("#wrapperIcon").on("mouseover", function () {
        if($("#wrapperDropdown").attr("class")==="hidden"){
            $("#menuIcon").addClass("open")
        }
    });
    $("#wrapperIcon").on("mouseout", function () {
        if($("#wrapperDropdown").attr("class")==="hidden"){
            $("#menuIcon").removeClass("open")
        }
    });

    $("#wrapperHome").on("mouseover", function () {
        $("#homeIcon").addClass("open");
        
    });
    $("#wrapperHome").on("mouseout", function () {
        $("#homeIcon").removeClass("open");
    });

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

    $("#wrapperHome").on("click", function () {
        window.open("grupparbete.html", "_self");
    });


});