
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

cities.forEach(function(element, index){
console.log(element);
$("select").append("<option>"+element+"</option>");
});

$(document).ready(function(){
	$("select").change(switchPhotos);

function switchPhotos(){
event.preventDefault();
var city = $("#city-type").val();
console.log(city);

if (city == "NYC"){
	$("body").attr("class", "nyc");
}

else if (city == "SF"){
	$("body").attr("class", "sf");

}


else if (city == "LA") {
	$("body").attr("class", "la");
}



else if (city == "ATX") {
	$("body").attr("class", "austin");
}


else {
	$("body").attr("class", "sydney");
}
}
});




































