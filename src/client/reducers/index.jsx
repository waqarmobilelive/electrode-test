import {combineReducers} from "redux";

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
};

export default combineReducers({
  list,
  details
});
