import productDetails from '../bot/productDetails';

export default function inProductList(value) {
	let product = value.replace(/ +/g, "");
    product = product.toLowerCase();
    let productArr = Object.keys(productDetails);
    if(value.toLowerCase() === 'back') {
        return true;
    } else if (!productArr.includes(product)) {
        return 'Sorry that is not a valid entry!';
    }
    return true;
}