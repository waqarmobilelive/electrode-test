import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleCheck, incNumber, decNumber } from "../actions";
import custom from "../styles/custom.css";
import {ProductListItem} from "./productListItem";


class ProductList extends React.Component {
  render() {
    const { list, dispatch } = this.props;
    return (
      <div>
        <h6 className={custom["docs-header"]}>Products List</h6>
        <ProductListItem />
      </div>
    );
  }
}

ProductList.propTypes = {
  list: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    checked: state.list.products
  };
};

export default connect(mapStateToProps, dispatch => ({ dispatch }))(ProductList);
