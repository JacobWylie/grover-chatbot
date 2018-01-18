import productDetails from './productDetails'

const computerTypes = ['apple', 'microsoft', 'lenovo', 'back'];

const computers = [
    {
        id: 'computers1',
        message: "Right on! Let's see what we have",
        trigger: 'computers2'
    },
    {
    	id: 'computers2',
    	message: 'Do you prefer computers made by Apple, Microsoft, or Lenovo?',
    	trigger: 'computers3'
    },
    {
    	id: 'computers3',
    	user: true,
    	validator: value => {
    		if(!computerTypes.includes(value.toLowerCase())) {
    			return "Sorry that is not a valid input"
    		}
    		return true;
    	},
    	trigger: 'poductDetails'
    },
    {
    	id: 'poductDetails',
    	message: ({previousValue}) => productChoice(previousValue),
    	trigger: 'summary'
    },
    {
    	id: 'apple',
    	message: ({previousValue, steps}) => productChoice(previousValue),
    	trigger: 'summary'
    },
    {
    	id: 'microsoft',
    	message: 'We can show you the details for the "Surfacebook"',
    	trigger: 'summary'
    },
    {
    	id: 'lenovo',
    	message: 'We can show you the details for the "Yoga 300"',
    	trigger: 'summary'
    }
]

function productChoice(previousValue) {
	let productArr = Object.keys(productDetails);
	let list = [];
	productArr.forEach(product => {
		let brand = productDetails[product].brand;
		brand = brand.toLowerCase();
		let value = previousValue.toLowerCase();
		if( brand === value) {
			list.push(productDetails[product].name)
		}
		return list;
	})
	if (list.length === 1) {
		return `We can show you the details for the "${list[0]}"`
	} else if (list.length === 0) {
		return "Sorry we don't have any products available from that brand right now"
	}
	return `hello ${list}`;
}

export default computers;



















