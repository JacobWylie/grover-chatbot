import productDetails from '../bot/productDetails';

export default function inProductList(value) {
	let newValue = value.toLowerCase().replace(/ +/g, "");
    let productArr = Object.keys(productDetails);
    let arr = [];
 	if (newValue === 'back') {return true};
 	productArr.forEach(category => {
 		productDetails[category].forEach(product => {
 			if(newValue === product.tag) {
 				arr.push(newValue);
 			}
 		})
 	})
 	return (arr.length > 0 ? true : false)
}