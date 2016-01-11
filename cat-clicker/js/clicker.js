var Cat = function(name, imgsource){
	this.name = name;
	this.imgsource = imgsource;
	this.clickcount = 0;
};

Cat.prototype.clicked = function() {
	this.clickcount = this.clickcount + 1;
	console.log("test");
};


var George = new Cat("George", "kitty1.jpg");
var Fred = new Cat("Frederick", "kitty2.jpg"); 
var Wendy = new Cat("Wendy", "kitty3.jpg");
var Marge = new Cat("Marge", "kitty4.jpg");
var Gambino = new Cat("Gambino", "kitty5.jpg");
var cats = new Array(George, Fred, Wendy, Marge, Gambino);

var bob = cats[1].name;
console.log(bob);
var numba1count = 0;
var numba2count = 0;
var numba3count = 0;
var numba4count = 0;
var numba5count = 0; 

$(document).ready(function() {

	for (i = 0; i < cats.length; i++) {
		var listid = "#numba" + (i + 1);
		$(listid).replaceWith('<li id=numba' + (i+1) + '>' + cats[i].name + '</li>')
	};

	$("#numba1").click(function(e) {
		var newcat1 = '<img class="cat1" src=' + cats[0].imgsource +' alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">'+ cats[0].name + '</h1>';
		$(".catname").replaceWith(newcatname);

		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, cats[0].clickcount);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			cats[0].clicked(); 
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, cats[0].clickcount);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$("#numba2").click(function(e) {
		var newcat1 = '<img class="cat1" src=' + cats[1].imgsource +' alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">'+ cats[1].name + '</h1>';
		$(".catname").replaceWith(newcatname);

		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, cats[1].clickcount);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			cats[1].clicked(); 
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, cats[1].clickcount);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$("#numba3").click(function(e) {
		var newcat1 = '<img class="cat1" src=' + cats[2].imgsource +' alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">'+ cats[2].name + '</h1>';
		$(".catname").replaceWith(newcatname);

		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, cats[2].clickcount);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			cats[2].clicked(); 
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, cats[2].clickcount);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$("#numba4").click(function(e) {
		var newcat1 = '<img class="cat1" src=' + cats[3].imgsource +' alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">'+ cats[3].name + '</h1>';
		$(".catname").replaceWith(newcatname);

		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, cats[3].clickcount);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			cats[3].clicked(); 
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, cats[3].clickcount);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$("#numba5").click(function(e) {
		var newcat1 = '<img class="cat1" src=' + cats[4].imgsource +' alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">'+ cats[4].name + '</h1>';
		$(".catname").replaceWith(newcatname);

		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, cats[4].clickcount);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			cats[4].clicked(); 
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, cats[4].clickcount);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$(".cat1").click(function(e) {
		cats[0].clicked();
		console.log(cats[0].clickcount);
		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, cats[0].clickcount);
		$(".cat1clicks").replaceWith(newCount1);
	});
});