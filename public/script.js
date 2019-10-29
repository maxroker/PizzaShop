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

	alert(`You added ${pizza} in a cart (${id} id of chosen pizza)`);
}