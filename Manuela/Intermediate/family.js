$(document).ready(function(){

let personas = JSON.parse(simpsons);

//console.table(personas);
// for (let i=0; i<personas.length, i++){
//     let member = " <div class = \"member\"> <img src = \"personas[i].image\"></div> ";

//     $('#container').append(member);
// }
//for (let i = 0; i < personas.length; i++){
//	version of Kieran better: no [i]

//simple and favo version
for (let i=0; i<personas.length; i++){
	$("#container").append(
	//	"<div class = 'member' id='mem"+[i]+"'><img src='"+personas[i].image+"'><p><b>"+personas[i].name+"</b></p><p>"+personas[i].relation+"</p>")
	
	//better: backtick notation

	`<div class="member" id="mem${[i]}">
	<img src = ${personas[i].image}>
	<p><b>${personas[i].name}</b></p>
	<p><b>${personas[i].relation}</b></p>
	</div>`
	)
	console.log(i + "appending successful " + personas[i].name + "<div class = 'member' id='mem"+[i]+"'><img src=");
	console.log(`${[i]} appending sucessful ${personas[i].name} <div class = "member" id="mem${[i]}"><img src="`);
}


//?
for (let i=0; i<personas.length; i++){
	personas[i].show=false
}
for (let i=0; i<personas.length; i++){
	$("#mem"+i).on("click", function(){
		if(personas[i].show==false){
		$(this).append("<p class='shown'><b>More: </b>"+personas[i].more+"</p>")
		personas[i].show=true
		}
		else {
			$(".shown").hide();
			personas[i].show=false
		}
	})
}

for (let i=0; i<personas.length; i++){
	$("#mem"+i).on("dblclick", function(){
		$(this).hide()})
	}

/*
for (member of personas){
	$("#container").append(
	//let array_more = [];
	 `<div class="card" id="${member.name}Card">
		<img class="foto" src="${member.image}"></img>
		<p class="name">${member.name}</p>
		<p class="person_relation">${member.relation}</p>
		<button class="button" >Show me more</button>
		<p class="more">${member.more}</p>
	</div>`);
} */
	//array_more.push([i], personas[i].more);
/*
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
	*/

// for (member of personas){
// 	(personas.relation).show = "false";
// }

// 	$("button").click(function() {
// 	//var content = $(this, "output_invisible").val();
// //	console.log($("img:nth-of-type"));

// 	//$("h4").text(personas[i].more);
// 	$(this).text("hello");
// 	$(this).sibling.addClass("visible");
// 	//$(".more").addClass("visible");

// 	});
	


});
