import productDetails2 from './productDetails2';

export default function brandsAvailable(value) {
	let list = [];
	let brands
	productDetails2.forEach(productType => {

		if(productType[0].type === value) {
			brands = productType 
			return brands;
		}
	})
	return brands[0].name
}