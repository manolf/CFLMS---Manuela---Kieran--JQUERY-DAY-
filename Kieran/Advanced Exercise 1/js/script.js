// Following this example: https://www.elated.com/drag-and-drop-with-jquery-your-essential-guide/

$(document).ready(function () {
    let correctCards = 0;
    const noCards = 10;

    function init() {
        // Hide the win message
        $("#successMessage").hide();

        $("#successMessage").css({
            left: "580px",
            top: "250px",
            width: 0,
            height: 0
        });

        // Resetting the points gained
        correctCards = 0;

        // Emptying the card containers
        $("#cardPile").html("");
        $("#cardSlots").html("");

        // Creating an card value array
        let numbers = new Array();
        for (i = 1; i <= noCards; i++){
            numbers.push(i);
        }
        console.log(numbers);

        // Shuffle cards
        numbers.sort(function() {
            return Math.random() - 0.5
        });

        // Building the cards for the player's hand
        for (let i = 0; i < noCards; i++) {
            $("<div>" + numbers[i] + "</div>")
            .data("number", numbers[i])
            .attr("id", "card" + numbers[i])
            .appendTo("#cardPile")
            .draggable({
              containment: "#content",
              stack: "#cardPile div",
              cursor: "move",
              revert: true
            } );
        }

        // Building the card slots
        let tableNumbers = new Array();
        for (let i = 1; i <= noCards; i++){
            tableNumbers.push(i);
        }

        for (let i = 1; i <= noCards; i++) {
            $("<div>" + tableNumbers[i - 1] + "</div>")
            .data("number", i)
            .appendTo("#cardSlots")
            .droppable({
              accept: "#cardPile div",
              hoverClass: "hovered",
              drop: handleCardDrop
            });
        }
    }

    function handleCardDrop(event, ui) {
        let slotNumber = $(this).data("number");
        let cardNumber = ui.draggable.data("number");

        if (slotNumber == cardNumber){ // If the data matches the dragged and the slot
            ui.draggable.addClass("correct");

            ui.draggable.draggable("disable");

            $(this).droppable("disable");

            ui.draggable.position({
                of: $(this), 
                my: "left top",
                at: "left top"
            });

            ui.draggable.draggable("option", "revert", false);

            correctCards++;
        }

        // Show win display if all cards are matched
        if (correctCards == noCards) {
            $('#successMessage').show();

            $('#successMessage').animate( {
                left: '380px',
                top: '200px',
                width: '400px',
                height: '100px',
                opacity: 1
            });
        }
    }

    // On ready of page, init the play field
    $(init);
});

