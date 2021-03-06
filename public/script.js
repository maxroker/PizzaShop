


const hello = () => {
	let x = localStorage.getItem('key');
	x = x * 1 + 1;
	window.alert(`Hello (greeted ${x} people)`);
	localStorage.setItem('key', x);
}


const addToCart = (pizza, id) => {
	let pizzaKey = 'pizza_' + id;
	let pizzaItem = window.localStorage.getItem(pizzaKey) * 1;
	pizzaItem += 1;
	window.localStorage.setItem(pizzaKey, pizzaItem);

	//Update input fild in nav-bar
	updateOrdersInput();
	updateOrdersButton();

	//alert(`You added ${pizza} in a cart (${id} id of chosen pizza). You have ${totalPizzaOrder()} pizzas in your cart.`);
}


const totalPizzaOrder = () => {
	let total = 0;

	for (let i in localStorage) {

		if (!i.search('pizza_')) {
			// console.log(i);
			//console.log(localStorage.getItem(i));

			// total number of pizzas in a cart
			total += window.localStorage.getItem(i) * 1;
		}
	}
	return total;
	//console.log(total);
}

const cartGetOrder = () => {
	let order = '';
	for (let key in localStorage) {
		let value = window.localStorage.getItem(key);
		if (!key.search('pizza_')) {
			// console.log(i);
			//console.log(localStorage.getItem(i));

			// total number of pizzas in a cart
			order = order + key + '=' + value + ',';
		}
	}
	return order;
	//console.log(total);
}


const updateOrdersInput = () => {
	let orders = cartGetOrder();
	$('#orders_input').val(orders);
}

const updateOrdersButton = () => {
	let text = 'Cart (' + totalPizzaOrder() + ')';
	$('#orders_button').val(text);
}


const clearCart = () => {
	localStorage.clear();
	updateOrdersInput();
	updateOrdersButton();
	// $("p").css("color", "yellow");
}


$(function() { 
			updateOrdersInput();
			updateOrdersButton();
		});

// $(document).ready(function(){
//   $("btn-clear").click(function(){
//     $("#cart-table").text('Your cart is now empty');
//   });
// });



const clearOrderTable = () => {

	localStorage.clear();
	updateOrdersInput();
	updateOrdersButton();
	// $('#cart-table').text('Your cart is now empty');
	$("#cart-table").text('Your cart is now empty.');
	return false;
}