import {combineReducers} from "redux";
<<<<<<< HEAD

const list = (store, action) => {
  if (action.type === "FETCH_PRODUCTS_LOADING") {
    return {products: [],isLoading:action.isLoading,hasErrored: false};
  }else if (action.type === "FETCH_PRODUCTS_SUCCESS") {
    return {products: action.payload,isLoading:false,hasErrored: false};
  }else if (action.type === "FETCH_PRODUCTS_ERROR") {
    return {products: [],isLoading:false,hasErrored:true};
  }

  return store || {products: [], isLoading:false,hasErrored:false};
};

const details = (store, action) => {
  if (action.type === "FETCH_PRODUCTS_DETAILS_LOADING") {
    return {productDetail: {},isLoading:action.isLoading,hasErrored: false};
  }else if (action.type === "FETCH_PRODUCTS_DETAILS_SUCCESS") {
    return {productDetail: action.payload,isLoading:false,hasErrored: false};
  }else if (action.type === "FETCH_PRODUCTS_DETAILS_ERROR") {
    return {productDetail: {},isLoading:false,hasErrored:true};
  }

  return store || {productDetail: {}, isLoading:false,hasErrored:false};
=======
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
>>>>>>> 20b4e7c4eb5d300cb3fb8319eb81256b33264698
};

export default combineReducers({
  list,
  details
});
