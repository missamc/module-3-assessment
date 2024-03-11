console.log("hello world");

const duck = document.querySelector(`#duck`);
duck.addEventListener(`mouseover`, () => {
	alert(`*Quack*`);
})





function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('click', () => {
	alert(`SUCCESSSS! Your form has been submitted!`)
});
