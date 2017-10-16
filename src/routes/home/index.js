import { h, Component } from 'preact';
import Card from '../../components/card';

import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<section class={style.card__wrap}>
					<Card
						title="Shane Fitzgerald"
						subtitle="Experienced Software Engineer"
						imgAvatar=""
						img="assets/img/profile__desk.jpg"
						overlayTitle=""
						overlaySubTitle=""
					/>
				</section>
			</div>
		);
	}
}
