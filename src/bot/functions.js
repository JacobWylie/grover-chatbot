import productDetails from './productDetails';

const helperFunctions = {

	populateCategories: function populateCategories() {
							let arr = Object.keys(productDetails);
							let catArr = [];
							function Category(value, label, trigger) {
								this.value = value;
								this.label = label;
								this.trigger = trigger;
							}

							arr.forEach(cat => {
								let newCat = new Category(cat, cat, 4)
								catArr.push(newCat);
							})
							return catArr
						},

	brandsAvailable: function brandsAvailable(value) {
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
					},

	productTypes: function validTypes(value, validWords) {
						value = value.toLowerCase().replace(/ +/g, "");
					    if(!validWords.includes(value)) {
					        return false;
					    }
					    return true;
					},

	productChoice: function productChoice(previousValue) {
						let productArr = Object.keys(productDetails);
						let list = [];
						let string = ""
						let value = previousValue.toLowerCase().replace(/ +/g, "");
						productArr.forEach(category => {
							productDetails[category].forEach(product => {
								if(value === product.class) {
									list.push(product.name)
								}
							})
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
					},

	inProductList: function inProductList(value) {
						let foundProduct = this.findProduct(value);
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
					},

					// Checks if the product the user selected exists. Disables user from selecting
					// anything that is not a product
	findProduct: function findProduct(value) {
					value = value.toLowerCase().replace(/ +/g, "");
					let productArr = Object.keys(productDetails);
					for (let i=0;i<productArr.length;i++) {
						for (let x=0;x< productDetails[productArr[i]].length;x++) {
							if (productDetails[productArr[i]][x].tag === value) {
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
}

export default helperFunctions;






































