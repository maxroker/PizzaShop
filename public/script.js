const hello = () => {
	var x = localStorage.getItem('key');
	window.alert(`Hello (greeted ${x} people)`);
	x = x * 1 + 1;
	localStorage.setItem('key', x);
}
