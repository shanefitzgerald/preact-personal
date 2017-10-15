import { h, Component } from 'preact';
import style from './style';

export default class Error extends Component {
	render({ }, formErrors) {
		return (
			<div className="formErrors">
				{Object.keys(formErrors).map((fieldName, i) => {
					if (formErrors[fieldName].length > 0) {
						return (
							<p key={i}>{fieldName} {formErrors[fieldName]}</p>
						);
					}
					return '';
          
				})}
			</div>
		);
	}
}