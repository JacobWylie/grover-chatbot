import findProduct from './findProduct';

// Checks if the product the user selected exists. Disables user from selecting
// anything that is not a product
export default function inProductList(value) {
	let foundProduct = findProduct(value);
	return (foundProduct ? true: false)
  	//   let arr = [];
 	// if (value.toLowerCase() === 'back') {return true};
 	// productArr.forEach(category => {
 	// 	productDetails[category].forEach(product => {
 	// 		if(newValue === product.tag) {
 	// 			arr.push(newValue);
 	// 		}
 	// 	})
 	// })
 	// return (arr.length > 0 ? true : false)
}

