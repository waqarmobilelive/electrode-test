import React from "react";

import {browserHistory} from 'react-router';

export class ProductListItem extends React.Component {
	
	handleOnClick(id){
	  browserHistory.push("/product/"+id);
	}

  render() {
  	return (
  	<a onClick={() => this.handleOnClick(this.props.id)}>{this.props.title}</a>
  )}
}

