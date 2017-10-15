import { h, Component } from 'preact';
import Form from '../../components/form';
import style from './style';
require('preact/devtools');

export default class Contact extends Component {
	render() {
		return (
			<div class={style.contact}>
				<h1>Contact</h1>
				<p>This is the Contact component.</p>
				<Form />
			</div>
		);
	}
}