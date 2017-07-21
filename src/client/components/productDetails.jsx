import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleCheck, incNumber, decNumber } from "../actions";
import custom from "../styles/custom.css";
import {ProductListItem} from "./productListItem";
import {fetchProductDetails} from "../actions/index";
import {browserHistory} from 'react-router';


class ProductDetails extends React.Component {
	componentDidMount() {
        this.props.fetchDetails(this.props.params.id);
    }

    goBack(){
    	browserHistory.goBack();
    }

  render() {
    const { data,hasErrored,isLoading } = this.props;
  
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the details</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div>
            	<div>{this.props.data.id}</div>
            	<div>{this.props.data.title}</div>
            	<div>{this.props.data.description}</div>
            	<button onClick={()=> this.goBack()}>Go Back</button>
            </div>
        );
  	}
}

ProductDetails.propTypes = {
  data: PropTypes.object,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    data: state.details.productDetail,
    hasErrored: state.details.hasErrored,
    isLoading: state.details.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: (id) => dispatch(fetchProductDetails(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
