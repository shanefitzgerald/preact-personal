import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import style from './style';

export default class Header extends Component {

	render(props, state) {
		return (
			<Card>
				<CardMedia
					overlay={<CardTitle title={this.props.overlayTitle} subtitle={this.props.overlaySubTitle} />}
				>
					<img src={this.props.img} alt="" />
				</CardMedia>
				<CardTitle title={this.props.title} subtitle={this.props.subtitle} />
				<CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				</CardText>
				<CardActions>
					<FlatButton label="Action1" />
					<FlatButton label="Action2" />
				</CardActions>
			</Card>
		);
	}
}