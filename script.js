//your JS code here. If required.
const btn = document.getElementById("btn");

btn.addEventListener('click',async () => { //using async fun on click of button,bcoz question requires that
	const text = document.getElementById("text").value;
	const delay = Number(document.getElementById("delay").value); //Number() to covert input delay into number,as we know input result returns string
	await delayFunction(delay);
	document.getElementById("output").innerText = text;
});

function delayFunction(delay){
	return new Promise((resolve) => {
		setTimeout(resolve,delay)
	})
}

/*
	in the entire code we are just taking text an delay from html form
	creating new function delayFunction() passing that delay to it
	waiting for specified delay and 
*/