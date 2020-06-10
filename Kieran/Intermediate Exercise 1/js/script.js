$(document).ready(function() {
    // Parsing JSON to obj
    let family = JSON.parse(familyTree);
    console.table(family);

    // Constructing the cards for each family member
    for (member of family) {
        $("#familyCards").append(`
            <div class="card" id="${member.name}Card">
                <img class="memberImg" src="img/${member.img}"></img>
            
                <p class="memberName">${member.name}</p>

                <p class="memberRel">${member.relation}</p>

                <p class="memberHobby">${member.hobby}</p>
            </div>
        `);
    }

    $(".memberHobby").hide();

    // Changing card border depending on immediate family relation
    for (member of family) {
        if (member.immediateFamily) {
            $(`#${member.name}Card`).css("border-color", "blue" );
            console.log(`${member.name} is immediate family`);
        } else {
            $(`#${member.name}Card`).css("border-color", "green" );
            console.log(`${member.name} is not immediate family`);
        }
    }

    // Changing color of cards for grandparents
    for (member of family) {
        if (member.generation == 1) {
            $(`#${member.name}Card`).css("border-color", "pink" );
            console.log(`${member.name} is Gen1`);
        }
    }

    let cardArr = $(".card");

   for (i of cardArr){
        $(i).on("dblclick", function() {
            $(i.memberHobby).toggle();
        })
    }
    
    
    // Adding double click "remove person" function
    for (i of cardArr){
        $(i).on("dblclick", function() {
            $(this).hide();
        })
    }
})

