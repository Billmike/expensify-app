console.log('App.js is connected');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
}

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}
	renderOptions();
}

const removeAll = () => {
	app.options = [];
	renderOptions();
}

const makeDecision = () => {
	const randomNumb = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNumb];
	alert(option);
}

const renderOptions = () => {
	const template = (
	<div>
		<h1>{app.title}</h1>
		<p> {app.subtitle}</p>
		<p>{ app.options.length > 0 ? 'Here are your options' : 'You currently have no options' }</p>
		<button disabled={app.options.length <= 0} onClick={makeDecision}>What should I do?</button>
		<ol>Your lists:
		{ app.options.map((option) => <li key={option}>{option}</li>) }
		</ol>
		
		<form onSubmit={onFormSubmit}>
			<input type="text" name="option"/>
			<button>Add options</button>
			<button disabled={app.options.length === 0} onClick={removeAll}> Remove all </button>
		</form>
	</div>
);
ReactDOM.render(template, document.getElementById('app'));

}

renderOptions();

