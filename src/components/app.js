import { h, Component } from 'preact';
import { Router } from 'preact-router';
import React from 'react';
// import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import Contact from '../routes/contact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Home from 'async!./home';
// import Profile from 'async!./profile';
export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	// componentDidMount() {
	// 	injectTapEventPlugin();
	// }

	render() {
		return (
			<MuiThemeProvider>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="shane" />
						<Contact path="/contact" />
					</Router>
				</div>
			</MuiThemeProvider>
		);
	}
}
