import React, { Component } from 'react';
import productDetails from '../bot/productDetails';

class ProductInfo extends Component {
	render() {
		let productId = this.props.product.toLowerCase().replace(/ +/g, "");
		let details;
		// searches through the product data and retrieves the product object
		// that the user specified and assign that object to "details"
		function findProduct(productId) {
			let productArr = Object.keys(productDetails);
			productArr.forEach(category => {
				productDetails[category].forEach(product => {
					if(product.tag === productId) {
						details = product;
					}
				})
			})
		}
		findProduct(productId);

		return(
			<tbody>
			<tr>
			    <td><span className="product">Brand</span>: {details.brand}</td>
			</tr>
			<tr>
			    <td><span className="product">Model</span>: {details.name}</td>
			</tr>
			<tr>
			    <td><span className="product">Specs</span>: {details.specs}</td>
			</tr>
			<tr>
			    <td><span className="product">Price</span>: {details.price}</td>
			</tr>
			<tr className="center">
			    <td><a target="_blank" href={details.link}><img src={details.img} alt='product'></img>Order Now!</a></td>
			</tr>
			</tbody>
		)
	}
};

export default ProductInfo;