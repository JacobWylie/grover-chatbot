import productDetails2 from './productDetails2';

export default function brandsAvailable(value) {
	let list = [];
	let string = ""

	// finds array of products that user selected
	// fills array of unique brands for that type of product
	productDetails2[value].forEach(product => {
		if(!list.includes(product.brand)) {
			list.push(product.brand)
		}
	})

	// compiles string from array to display as message on page
	if (list.length === 0) {
		string = `Sorry we don't have any products available in that category right now. Please type "back"`;
	} else if (list.length > 1){
		string = "We currently have these brands in stock: "
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