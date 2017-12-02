class IndecisionApp extends React.Component {

	constructor(props) {
		super(props);
		this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
		this.handlePickOptions = this.handlePickOptions.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleRemoveSingleOption = this.handleRemoveSingleOption.bind(this);
		this.state = {
			options: []
		}
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options }));
			}
		} catch(e) {
			// statements
			console.log(e);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			console.log('Saving Data.......')
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);

			console.log('Data saved.......')
		}
	}

	componentwillUnmount() {

	}

	handleRemoveOptions() {
		this.setState(() => ({ options: [] }));
	}

	handleRemoveSingleOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}))
	}

	handlePickOptions() {
		this.setState(() => {
			const randomOptionIndex = Math.floor(Math.random() * this.state.options.length);
			const randomOption = this.state.options[randomOptionIndex];
			alert(randomOption);
		})

}

	handleAddOption(option) {
		if (!option) {
			return 'Enter a valid option to be added.'
		} else if (this.state.options.indexOf(option) > -1) {
			return 'Duplicate items not allowed.'
		}
		this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
	}

	render() {
		const subtitle = 'Put your life in the hands of a computer.';

		return (
			<div>
				<Header subtitle = { subtitle } />
				<Action
				hasOptions = { this.state.options.length > 0 }
				handlePickOptions = { this.handlePickOptions }
				/>
				<Options
				options = { this.state.options }
				handleRemoveOptions = { this.handleRemoveOptions }
				handleRemoveSingleOption = { this.handleRemoveSingleOption }
				/>
				<AddOption handleAddOption = { this.handleAddOption }/>
			</div>
		)
	}
}

const Header = (props) => {
	return (
			<div>
				<h1> { props.title }</h1>
				{props.subtitle && <h2> { props.subtitle }</h2>}
			</div>
		)
}

Header.defaultProps = {
	title: 'Indecision'
}

const Action = (props) => {
	return (
			<div>
			<button
			onClick = { props.handlePickOptions }
			disabled = { !props.hasOptions }
			>
			What should I do today?
			</button>
			</div>
		)
}

const Options = (props) => {
	return (
			<div>
				{props.options.map((option) =>
					<Option
					key={option}
					optionText={option}
					handleRemoveSingleOption = { props.handleRemoveSingleOption }
					/>)}
				<button onClick={props.handleRemoveOptions}> Remove all options</button>
				{  props.options.length === 0 && <p>Enter an option to get started.</p> }
			</div>
		)
}

const Option = (props) => {
	return (
			<div>
				<p>{props.optionText}</p>
				<button
				onClick={(e) => props.handleRemoveSingleOption(props.optionText)}
				> remove </button>
			</div>
		);
}


class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.state = {
			error: undefined
		}
	}
	onFormSubmit(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => ({ error }));

		if (!error) {
			e.target.elements.option.value = '';
		}
		
	}
	render() {
		return (
			<div>
			{ this.state.error && <p>{this.state.error}</p> }
				<form onSubmit={this.onFormSubmit}>
					<input type="text" name="option" placeholder="Enter your schedule" />
					<button> Add option</button>
				</form>
			</div>
		)
	}
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
