export function fetchProducts (){
  return (dispatch) => {
    dispatch(productsAreLoading(true));

        fetch("http://localhost:3000/api/products")
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(productsAreLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchProductsSuccess(items)))
            .catch(() => dispatch(fetchProductsError(true)));
  };
}

export function fetchProductDetails (id){
  return (dispatch) => {
    dispatch(productDetailsAreLoading(true));

        fetch("http://localhost:3000/api/products/"+id)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(productDetailsAreLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(productDetailsSuccess(items)))
            .catch(() => dispatch(productDetailsError(true)));
  };
}

export const productsAreLoading = (bool) => {
  return {
    type:"FETCH_PRODUCTS_LOADING",
    isLoading: bool,
    hasErrored: false,
    payload: []
  };
}

export const fetchProductsSuccess = (data) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: data.products,
    isLoading: false,
    hasErrored: false
  };
};

export const fetchProductsError = (bool) => {
  return {
    type: "FETCH_PRODUCTS_ERROR",
    hasErrored: bool,
    payload: [],
    isLoading: false
  };
};

export const productDetailsAreLoading = (bool) => {
  return {
    type:"FETCH_PRODUCTS_DETAILS_LOADING",
    isLoading: bool,
    hasErrored: false,
    payload: []
  };
}

export const productDetailsSuccess = (data) => {
  return {
    type: "FETCH_PRODUCTS_DETAILS_SUCCESS",
    payload: data.product,
    isLoading: false,
    hasErrored: false
  };
};

export const productDetailsError = (bool) => {
  return {
    type: "FETCH_PRODUCTS_DETAILS_ERROR",
    hasErrored: bool,
    payload: [],
    isLoading: false
  };
};