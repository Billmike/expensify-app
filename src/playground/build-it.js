class VisibilityApp extends React.Component {
	render() {
		return (
			<div>
				<Visible />
			</div>
	)
	}
}

class Visible extends React.Component {

	constructor(props) {
		super(props);
		this.toggleVisibility = this.toggleVisibility.bind(this);
		this.state = {
			visible: false
		}
	}

	toggleVisibility() {
		this.setState((currentState) => {
			console.log(currentState);
			return {
				visible: !currentState.visible
			}
		});
	}

	render() {
		return(
			<div>
				<h1>Visibility </h1>
				<button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide details' : 'Show Details'}</button>
				{this.state.visible && <p>This content would be hidden on next click.</p>}
			</div>
		)
	}
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'));



// let visible = false;

// const toggleVisibility = () => {
// 	visible = !visible;
// 	toggle();
// }

// const toggle = () => {
// 	const visibility = (
// 		<div>
// 			<h1> Visibility </h1>
// 			<button onClick={toggleVisibility}> {visible ? 'Hide details' : 'Show details'} </button>
// 			{visible && <p> I messed up big time menh!!!!!</p>}
// 		</div>
// 	)

// ReactDOM.render(visibility, document.getElementById('app'));
// }

// toggle();