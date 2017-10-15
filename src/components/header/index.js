import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Shane Fitzgerald</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/profile">About</Link>
					<Link activeClassName={style.active} href="/contact">Contact</Link>
				</nav>
			</header>
		);
	}
}
