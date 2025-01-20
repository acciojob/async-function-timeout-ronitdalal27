//your JS code here. If required.
const btn = document.getElementById("btn");

btn.addEventListener('click',async () => { //using async fun on click of button,bcoz question requires that
	const text = document.getElementById("text").value;
	const delay = Number(document.getElementById("delay").value); //Number() to covert input delay into number,as we know input result returns string
	await delayFunction(delay);
	document.getElementById("output").innerText = text;
});

async function delayFunction(delay){
	return new Promise((resolve) => {
		setTimeout(resolve,delay)
	})
}