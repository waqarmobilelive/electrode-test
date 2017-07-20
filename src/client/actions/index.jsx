import productsApi from "../api/productsApi";

export const fetchProducts = () => {
  return {
    type: "FETCH_PRODUCTS"
  };
};

export const fetchProductsSuccess = () => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS"
  };
};

export const fetchProductsError = () => {
  return {
    type: "FETCH_PRODUCTS_ERROR"
  };
};

export const fetchProductsReset = () => {
  return {
    type: "FETCH_PRODUCTS_RESET"
  };
};

export const fetchDetails = (product_id) => {
  return {
    type: "FETCH_DETAILS",
    id: product_id
  };
};

export const fetchDetailsSuccess = (product_id) => {
  return {
    type: "FETCH_DETAILS_SUCCESS",
    id: product_id
  };
};

export const fetchDetailsError = (product_id) => {
  return {
    type: "FETCH_DETAILS_ERROR",
    id: product_id
  };
};

export const fetchDetailsReset = (product_id) => {
  return {
    type: "FETCH_DETAILS_RESET",
    id: product_id
  };
};