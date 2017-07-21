class productsAPI{
	static getAllProducts(){
		return fetch("localhost:3000/api/products").then(response => {
			return response.json();
		}).catch(error =>{
			return error;
		})
	}

	static getSpecificProduct(productId){
		return fetch("localhost:3000/api/product"+productId).then(response => {
			return response.json();
		}).catch(error =>{
			return error;
		})
	}
}

export default productsAPI;