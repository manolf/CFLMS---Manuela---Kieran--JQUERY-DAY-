$(document).ready(function(){

let personas = JSON.parse(simpsons);
console.table(personas);
// for (let i=0; i<personas.length, i++){
//     let member = " <div class = \"member\"> <img src = \"personas[i].image\"></div> ";

//     $('#container').append(member);
// }
//for (let i = 0; i < personas.length; i++){
//	version of Kieran better: no [i]

for (member of personas){
	$("#container").append(
	//let array_more = [];
	 `<div class="card" id="${member.name}Card">
		<img class="foto" src="${member.image}"></img>
		<p class="name">${member.name}</p>
		<p class="person_relation">${member.relation}</p>
		<button class="button" >Show me more</button>
		<p class="more" class="output_invisible">${member.more}</p>
	</div>`);
}
	//array_more.push([i], personas[i].more);



	$("button").click(function() {
	//var content = $(this, "output_invisible").val();
//	console.log($("img:nth-of-type"));

	//$("h4").text(personas[i].more);
	$(this).text("hello");
	});
	
	let cardArr = $(".card");
	for (i of cardArr){
		$(i).on("dblclick", function() {
			$(i.more).hide();
		})
	}

});
