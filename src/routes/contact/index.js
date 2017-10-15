import { h, Component } from 'preact';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


import style from './style';

export default class Contact extends Component {
  render() {
    return (
      <div class={style.contact}>
        <h1>Contact</h1>
        <p>This is the Contact component.</p>
        <RaisedButton label="Default" />
      </div>
    );
	}
}