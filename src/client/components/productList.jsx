import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleCheck, incNumber, decNumber } from "../actions";
import custom from "../styles/custom.css";
import {ProductListItem} from "./productListItem";

import {fetchProducts} from "../actions/index";


class ProductList extends React.Component {
	componentDidMount() {
        if(typeof this.props.list != 'undefined' && this.props.list.length == 0){
        	this.props.fetchData();
        }else if(typeof this.props.list == 'undefined'){
        	this.props.fetchData();
        }
    }

  render() {
    const { list,hasErrored,isLoading } = this.props;
  
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {
                this.props.list.map((product) => (
                    <li key={product.id}>
                        <ProductListItem id={product.id} title={product.title}/>
                    </li>
                ))}
            </ul>
        );
  	}
}

ProductList.propTypes = {
  list: PropTypes.array,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    list: state.list.products,
    hasErrored: state.list.hasErrored,
    isLoading: state.list.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchProducts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

