import productDetails from './productDetails';

export default function brandsAvailable(value) {
	let list = [];
	let string = ""

	// finds array of products that user selected
	// fills new array of unique brands for that type of product
	// to display to user to choose from
	productDetails[value].forEach(product => {
		if(!list.includes(product.display)) {
			list.push(product.display)
		}
	})

	// compiles string from array to display as message on page
	if (list.length === 0) {
		string = `Sorry we don't have any products available in that category right now. Please type "back"`;
	} else if (list.length > 0){
		string = `We currently have these ${value} in stock: `
		for(let i=0;i<list.length;i++) {
			string += ` "${list[i]}" | `;
		}
		string += "  Please type which one you'd like to explore"
		return string;
	} else {
		string = 'There was an error. Please type "back"'
	}
	return string;	
}