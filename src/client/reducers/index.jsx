import {combineReducers} from "redux";
import productsAPI from "../api/productsApi";

const list = (store, action) => {
  if (action.type === "FETCH_PRODUCTS") {
    return {products: []};
  }else if (action.type === "FETCH_PRODUCTS_SUCCESS") {
    return {products: []};
  }else if (action.type === "FETCH_PRODUCTS_ERROR") {
    return {products: []};
  }else if (action.type === "FETCH_PRODUCTS_RESET") {
    return {products: []};
  }

  return store || {products: []};
};

const details = (store, action) => {
  if (action.type === "FETCH_DETAILS") {
    return {productDetail: []};
  }else if (action.type === "FETCH_DETAILS_SUCCESS") {
    return {productDetail: []};
  }else if (action.type === "FETCH_DETAILS_ERROR") {
    return {productDetail: []};
  }else if (action.type === "FETCH_DETAILS_RESET") {
    return {productDetail: []};
  }

  return store || {productDetail: []};
};

export default combineReducers({
  list,
  details
});
