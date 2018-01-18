import productDetails from './productDetails';

export default function productChoice(previousValue) {
	let productArr = Object.keys(productDetails);
	let list = [];
	let string = ""
	productArr.forEach(product => {
		let brand = productDetails[product].brand;
		brand = brand.toLowerCase();
		let value = previousValue.toLowerCase();
		value = value.replace(/ +/g, "");
		if( brand === value) {
			list.push(productDetails[product].name)
		}
		return list;
	})
	if (list.length === 1) {
		string = `We can show you the details for the "${list[0]}"`;
	} else if (list.length === 0) {
		string = `Sorry we don't have any products available from that brand right now. Please type "back"`;
	} else if (list.length > 1){
		string = "We can show you product details for"
		for(let i=0;i<list.length;i++) {
			string += ` "${list[i]}" |`;
		}
		return string;
	} else {
		string = "There was an error"
	}
	return string;	
}