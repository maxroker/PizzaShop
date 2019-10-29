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

	alert(`You added ${pizza} in a cart (${id} id of chosen pizza). You have ${totalPizzaOrder()} pizzas in your cart.`);
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