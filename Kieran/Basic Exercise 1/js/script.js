$(document).ready(function () {
    // Bell click
    $("#bell").on("click", function() {
        $("h1").text("You clicked the bell");
    });

    // Santa click
    $("#santa").on("click", function() {
        $("h1").text("You clicked santa");
    });

    // Gift click
    $("#gift").on("click", function() {
        $("h1").text("You clicked the gift");
    });
});