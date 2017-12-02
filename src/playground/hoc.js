import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
	return (
		<div>
			<h1>Info</h1>
			<p>The Info is: {props.info}</p>
		</div>
		)
};

const withWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private Information!</p>}
			<WrappedComponent {...props} />
		</div>
		)
}

const AdminInfo = withWarning(Info);

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated && <WrappedComponent {...props} />}
			{!props.isAuthenticated && <p>Please sign in</p>} 
		</div>
		)
}

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated info="These are the details" />, document.getElementById('app'));
