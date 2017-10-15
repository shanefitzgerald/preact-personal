import { h, Component } from 'preact';
import Card from '../../components/card'

import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Card
					title="TEST TITLE"
					subtitle="TEST SUBTITLE"
					imgAvatar=""
					img="assets/img/profile__desk.jpg"
					overlayTitle="Website for Shane Fitzgerald"
					overlaySubTitle="Experienced Software Engineer"
				/>
			</div>
		);
	}
}
