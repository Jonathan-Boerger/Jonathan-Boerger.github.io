	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		unit: "head",
		organic: true,
		organic_price: 2.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		unit: 'loaf',
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		price: 13.50,
		unit: "lbs",
		organic: true,
		organic_price: 19.99
	},
	{
		name: "Rice",
		vegetarian: true,
		glutenFree: false,
		price: 1.95,
		unit: '100 gr',
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Sparkling Water",
		vegetarian: true,
		glutenFree: true,
		price: 5.99,
		unit: "case",
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Coffee Beans",
		vegetarian: true,
		glutenFree: true,
		price: 9.99,
		unit: 'bag',
		organic: true,
		organic_price: 17.99
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		price: 8.25,
		unit: "lbs",
		organic: true,
		organic_price: 10.50
	},
	{
		name: "Pasta (generic)",
		vegetarian: true,
		glutenFree: false,
		price: 1.75,
		unit: 'box',
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Pasta (brand name)",
		vegetarian: true,
		glutenFree: false,
		price: 2.75,
		unit: 'box',
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Oatmeal",
		vegetarian: true,
		glutenFree: false,
		price: 5.99,
		unit: "bag",
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Gluten Free Vegie Pizza",
		vegetarian: true,
		glutenFree: true,
		price: 8.00,
		unit: 'item',
		organic: false,
		organic_price: "nil"
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		unit: "lbs",
		organic: true,
		organic_price: 13.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let filtered_product_list = [];
	let product_prices=[];
	// for (let i=0; i<prods.length; i+=1) {
	// 	if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
	// 		product_names.push(prods[i].name);
	// 	}
	// 	else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
	// 		product_names.push(prods[i].name);
	// 	}
	// 	else if (restriction == "None"){
	// 		product_names.push(prods[i].name);
	//
	// 	}
	// }

	for (let i=0; i<prods.length; i+=1) {
		if ((restriction.includes('Veg')) && (prods[i].vegetarian == false)){
			continue;}
		else if ((restriction.includes('Glut')) && (prods[i].glutenFree == false)){
			continue;}
		else {
			filtered_product_list.push(prods[i]);

		}
	}
	return filtered_product_list;


}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price;
		}if (chosenProducts.indexOf('Organic ' + products[i].name) > -1) {
			totalPrice += products[i].organic_price;
		}
	}
	return totalPrice.toFixed(2);
}
