$(document).ready(function () {
    // get array of the santa class
    let santas = $(".santa");
    console.table(santas);

    for (i of santas){
        $(i).on("click", function() {
            $(this).hide();
        });
    }
});