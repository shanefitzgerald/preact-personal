import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const overRideStyles = {
  height: '400px'
}

export default class Header extends Component {

	render(props, state) {
		return (
			<Card>
				<CardTitle title={this.props.title} subtitle={this.props.subtitle} />
				<CardText>
					{this.props.text}
				</CardText>
				<CardActions>
					<FlatButton label="Contact" />
					<FlatButton label="Blog" />
				</CardActions>
			</Card>
		);
	}
}