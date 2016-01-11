var initialCats = [
	{
		clickCount : 0,
		name : 'George',
		imgSrc : 'img/kitty1.jpg',
		nicknames : ['Foreman', 'Orwell']
	},
	{
		clickCount : 0,
		name : 'Frederick',
		imgSrc : 'img/kitty2.jpg',	
		nicknames : ['Sir Lancelot', 'Puss in Boots']	
	},
	{
		clickCount : 0,
		name : 'Wendy',
		imgSrc : 'img/kitty3.jpg',		
		nicknames : ['Frosty', 'Wittle Kitty']
	},
	{
		clickCount : 0,
		name : 'Marge',
		imgSrc : 'img/kitty4.jpg',	
		nicknames : ['Simpson', 'I cant believe its not butter']	
	},
	{
		clickCount : 0,
		name : 'Gambino',
		imgSrc : 'img/kitty5.jpg',	
		nicknames : ['Is a mastermind', 'Childish']	
	},		
];

var CatModel = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.level = ko.computed(function() {
		if (this.clickCount() > 9){
			return ('Lvl: Cat');
		}
		else {
			return ('Lvl: Kitty');
		}
	}, this);

	this.nicknames = ko.observableArray(data.nicknames);
};

var ViewModel = function () {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new CatModel(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};

};

ko.applyBindings(new ViewModel)