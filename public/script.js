const hello = () => {
	let x = localStorage.getItem('key');
	x = x * 1 + 1;
	window.alert(`Hello (greeted ${x} people)`);
	localStorage.setItem('key', x);
}
