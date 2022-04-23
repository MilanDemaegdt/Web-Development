const update = () => {
	let slider1 = document.getElementById("slider1");
	let slider2 = document.getElementById("slider2");
	let slider3 = document.getElementById("slider3");

	let value1 = slider1.value;
	let value2 = slider2.value;
	let value3 = slider3.value;

	let background = document.getElementsByClassName("swatch");
	background[0].style.backgroundColor = "rgb(" + value1 + ", " + value2 + ", " + value3 + ")";

	console.log(value1)
}

const setup = () => {
	slider1 = document.getElementById("slider1");
	slider2 = document.getElementById("slider2");
	slider3 = document.getElementById("slider3");
	slider1.addEventListener("change", update)
	slider2.addEventListener("change", update)
	slider3.addEventListener("change", update)
	let button = document.getElementById('button')
	button.addEventListener("click", click);
}

const click = () => {
	let swatch = document.createElement("div");
	swatch.classList.add("swatch");
	let background = document.getElementsByClassName("swatch")[0];
	swatch.style.backgroundColor = background.style.backgroundColor;

	swatch.style.float = "bottom";
	document.body.appendChild(swatch);


	const verwijderButton = document.createElement("button");

	swatch.appendChild(verwijderButton);



	const verwijderButtonText = document.createTextNode("X");
	verwijderButton.appendChild(verwijderButtonText);
	verwijderButton.addEventListener("click", verwijderen);
}
window.addEventListener("load", setup);