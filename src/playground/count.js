class CounterApp extends React.Component {
	render() {
		return (
			<div>
			  <Count />
			</div>
		)
	}
}

class Count extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleRemoveOne = this.handleRemoveOne.bind(this);
		this.handleResetAll = this.handleResetAll.bind(this);
		this.state = {
			count: 0
		};
	}

	componentDidMount() {
		try {
			const value = localStorage.getItem('count');
			const intValue = parseInt(value, 10);

			if (!(isNaN(intValue))) {
				this.setState(() => ({ count: intValue }))
			}
		} catch(e) {
			// statements
			console.log(e);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count', this.state.count);
		}
	}

	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			}
		})
	}

	handleRemoveOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			}
		})
	}

	handleResetAll() {
		this.setState((props) => {
			return {
				count: 0
			}
		})
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}> +1 </button>
				<button onClick={this.handleRemoveOne}> -1 </button>
				<button onClick={this.handleResetAll}> reset </button>
			</div>
		)
	}
}

ReactDOM.render(<CounterApp />, document.getElementById('app'))


// let count = 0;
// const addOne = () => {
// 	count ++;
// 	renderCount();
// }

// const minusOne = () => {
// 	count--;
// 	renderCount();
// }

// const reset = () => {
// 	count = 0;
// 	renderCount();
// }


// const renderCount = () => {
// 	const templateTwo = (
// 	<div>
// 		<h1>Count: { count }</h1>
// 		<button onClick={addOne}> +1 </button>
// 		<button onClick={minusOne}> -1 </button>
// 		<button onClick={reset}> Reset</button>
// 	</div>
// 	);
// 	ReactDOM.render(templateTwo, document.getElementById('app'));
// }

// renderCount();