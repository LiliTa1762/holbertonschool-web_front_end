function changeMode(size, weight, transform, background, color) {
	return function () {
		document.body.style.fontSize = size;
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	};
}

function main() {
	let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
	let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

	let paragraph = document.createElement("p");
	paragraph.innerHTML = "Welcome Holberton!";
	document.body.appendChild(paragraph);

	spooky_btn = document.createElement("button");
	spooky_btn.innerHTML = "Spooky";
	spooky_btn.onclick = function () {
		spooky();
	};
	document.body.appendChild(spooky_btn);

	dark_btn = document.createElement("button");
	dark_btn.innerHTML = "Dark mode";
	dark_btn.onclick = function () {
		darkMode();
	};
	document.body.appendChild(dark_btn);

	scream_btn = document.createElement("button");
	scream_btn.innerHTML = "Scream mode";
	scream_btn.onclick = function () {
		screamMode();
	};
	document.body.appendChild(scream_btn);
};

main();
