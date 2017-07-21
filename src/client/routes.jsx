import React from "react";
import { Route } from "react-router";
import Home from "./components/home";
import ProductList from "./components/productList";
import ProductDetails from "./components/productDetails";

export const routes = <Route path="/" component={Home}>
						<Route path="/products" component={ProductList} />
						<Route path="/product/:id" component={ProductDetails} />
					</Route>;
