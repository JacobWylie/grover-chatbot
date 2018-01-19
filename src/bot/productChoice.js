import productDetails from './productDetails2';

export default function productChoice(previousValue) {
	let productArr = Object.keys(productDetails);
	let list = [];
	let string = ""
	let value = previousValue.toLowerCase();
	if (previousValue === 'back') {return 'back'}
	productArr.forEach(product => {
		let brand = productDetails[product].brand;
		brand = brand.toLowerCase();
		if( brand === value) {
			list.push(productDetails[product].name)
		}
		return list;
	})
	if (list.length === 0) {
		string = `Sorry we don't have any products available from that brand right now. Please type "back"`;
	} else if (list.length > 1){
		string = "We can show you product details for the following:"
		for(let i=0;i<list.length;i++) {
			string += ` "${list[i]}" |`;
		}
		return string;
	} else {
		string = "There was an error"
	}
	return string;	
}