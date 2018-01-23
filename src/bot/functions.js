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
	brandsAvailable: function(value) {
						let list = [];
						for (let i=0; i<productDetails.length;i++) {
							if (productDetails[i].type === value && !list.includes(productDetails[i].display)) {
								list.push(productDetails[i].display)
							}

						}

						// compiles string from array to display as message on page
						let noProduct = `Sorry we don't have any ${value} available right now. Please type "back"`;
						let product = `We currently have these ${value} in stock: `;
						let string = this.concactString(list, noProduct, product);
						string += "  Please type which one you'd like to explore";
						return string
					},

				  // checks to see if user is trying to view a valid product type. all other inputs return an error	
	productTypes: function(value) {
						value = this.lowerCaseNoSpace(value);
					    let truthy
					    for (let i=0;i<productDetails.length;i++) {
					    	let product = this.lowerCaseNoSpace(productDetails[i].display)
					    	console.log(product)
					    	if(product === value)
					    		return truthy = true
						}
						return (truthy || value === 'back' ? true : "Sorry that is not a valid input")
					},

				   // Returns a list of products based on the type selected. User can select from list to see details	
	productChoice: function(previousValue) {
						let list = [];
						let value = this.lowerCaseNoSpace(previousValue);
						for(let i=0; i<productDetails.length; i++) {
							let name = this.lowerCaseNoSpace(productDetails[i].display);
								if(value === name) {
									list.push(productDetails[i].name);
								}
						}
						// compiles string from array to display as message on page
						let noProduct = `Sorry we don't have any products available from ${previousValue} right now. Please type "back"`;
						let product = "We can show you product details for the following:";
						let string = this.concactString(list, noProduct, product);
						return string;
					},

					// Checks to see if user is trying to see valid project. all other inputs return error
	inProductList: function(value) {
						let foundProduct = this.findProduct(value);
						return (foundProduct || value ==='back' ? true: "Sorry that is not a valid input");
					},

					// Checks if the product the user selected exists. Disables user from selecting
					// anything that is not a product
	findProduct: function(value) {
					value = this.lowerCaseNoSpace(value);
					for (let i=0;i<productDetails.length;i++) {
						let tag = this.lowerCaseNoSpace(productDetails[i].name);
						if (tag === value) {
							return productDetails[i];
						}
					}
					return false
				},

	concactString: function(array, noProduct, product) {
						if (array.length === 0) {
							return noProduct;
						} else if (array.length > 0){
							for(let i=0;i<array.length;i++) {
								product += ` "${array[i]}" |`;
							}
							return product;
						} else {
							return 'There was an error. Please type "back"'
						}

	},

	lowerCaseNoSpace: value => value.toLowerCase().replace(/ +/g, "")

}

export default helperFunctions;






































