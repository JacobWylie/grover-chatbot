import productDetails from './productDetails';

// searches through the product data and retrieves the product object
// that the user specified and assign that object to "details"
export default function findProduct(value) {
	value = value.toLowerCase().replace(/ +/g, "");
	let productArr = Object.keys(productDetails);
	for (let i=0;i<productArr.length;i++) {
		for (let x=0;x< productDetails[productArr[i]].length;x++) {
			console.log(i)
			if (productDetails[productArr[i]][x].tag === value) {
				console.log(x)
				return productDetails[productArr[i]][x];
			}
		}
	}
	// productArr.forEach(category => {
	// 	productDetails[category].forEach(product => {
	// 		if(product.tag === value) {
	// 			console.log(product)
	// 			return product;
	// 		}
	// 	})
	// })
}