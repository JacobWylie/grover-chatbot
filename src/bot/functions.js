import productDetails from './productDetails';

const helperFunctions = {

						// populates the initial list of categories from the data set
	populateCategories: () => {
							const catArr = []
							const catNames = [...new Set(productDetails.map(product => product.type))];
							catNames.shift()
							function Category(label, value, trigger) {
								this.label = label;
								this.value = value;
								this.trigger = trigger;
							}
							for (let i=0; i<catNames.length; i++) {
								let newCat = new Category(catNames[i], catNames[i], 'brandsAvailable')
								catArr.push(newCat)
							}
							return catArr;
						},
	
					 // displays list of available brands from selected category
	brandsAvailable: value => {
						let list = [];
						let string = ""
						for (let i=0; i<productDetails.length;i++) {
							if (productDetails[i].type === value && !list.includes(productDetails[i].display)) {
								list.push(productDetails[i].display)
							}

						}
						// compiles string from array to display as message on page
						if (list.length === 0) {
							string = `Sorry we don't have any products available in that category right now. Please type "back"`;
						} else if (list.length > 0){
							string = `We currently have these ${value} in stock: `;
							for(let i=0;i<list.length;i++) {
								string += ` "${list[i]}" | `;
							}
							string += "  Please type which one you'd like to explore";
						} else {
							string = 'There was an error. Please type "back"';
						}
						return string;	
					},

				  // checks to see if user is trying to view a valid product type. all other inputs return an error	
	productTypes: function productTypes(value) {
						value = this.lowerCaseNoSpace(value);
					    let truthy
					    for (let i=1;i<productDetails.length;i++) {
					    	let product = this.lowerCaseNoSpace(productDetails[i].display)
					    	if(product === value)
					    		truthy = true
						}
						return (truthy || value === 'back' ? true : "Sorry that is not a valid input")
					},

				   // Returns a list of products based on the type selected. User can select from list to see details	
	productChoice: function productChoice(previousValue) {
						let productArr = Object.keys(productDetails);
						let list = [];
						let string = "";
						let value = this.a.lowerCaseNoSpace(previousValue);
						productArr.forEach(category => {
							productDetails[category].forEach(product => {
								let name = product.display;
								name = this.lowerCaseNoSpace(name);
								if(value === name) {
									list.push(product.name);
								}
							})
							return list;
						})

						if (list.length === 0) {
							string = `Sorry we don't have any products available from ${previousValue} right now. Please type "back"`;
						} else if (list.length > 0){
							string = "We can show you product details for the following:";
							for(let i=0;i<list.length;i++) {
								string += ` "${list[i]}" |`;
							}
							return string;
						} else {
							string = "There was an error";
						}
						return string;	
					},

					// Checks to see if user is trying to see valid project. all other inputs return error
	inProductList: function inProductList(value) {
						let foundProduct = this.a.findProduct(value);
						return (foundProduct || value ==='back' ? true: "Sorry that is not a valid input");
					},

					// Checks if the product the user selected exists. Disables user from selecting
					// anything that is not a product
	findProduct: function findProduct(value) {
					value = this.a.lowerCaseNoSpace(value);
					let productArr = Object.keys(productDetails);
					for (let i=0;i<productArr.length;i++) {
						for (let x=0;x< productDetails[productArr[i]].length;x++) {
							let tag = productDetails[productArr[i]][x].name;
							tag = this.a.lowerCaseNoSpace(tag);
							if (tag === value) {
								return productDetails[productArr[i]][x];
							}
						}
					}
				},

	lowerCaseNoSpace: value => value.toLowerCase().replace(/ +/g, "")

}

export default helperFunctions;






































