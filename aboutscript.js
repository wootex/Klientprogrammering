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