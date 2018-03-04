// function with additional values
function Phone(brand, price, color, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.weight = weight;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", weight is " + this.weight + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver", 162);
var samsungGalaxyS6 = new Phone ("Samsung", 1960, "blue", 350);
var onePlusOne = new Phone ("One Plus", 3800, "white", 220);

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

// another prototype function
Phone.prototype.logBrand = function() {
	console.log(this.brand);
}

iPhone6S.logBrand();
samsungGalaxyS6.logBrand();
onePlusOne.logBrand();