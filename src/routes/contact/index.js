import { h, Component } from 'preact';
import FormContact from '../../components/contact';

import style from './style';

export default class Contact extends Component {
	render() {
		return (
			<div class={style.contact}>
				<h1>Contact</h1>
				<FormContact />
			</div>
		);
	}
}