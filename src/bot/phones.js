import validTypes from './validTypes';

const phoneTypes = ['apple iphone', 'samsung', 'back'];

const phones = [
    {
        id: 'phones1',
        message: "Great! Let's see what brands are currently available.",
        trigger: 'phones2'
    },
    {
    	id: 'phones2',
    	message: 'Would you like to view our "Apple iPhone" or "Samsung" devices?',
    	trigger: 'phones3'
    },
    {
    	id: 'phones3',
    	user: true,
    	validator: value => validTypes(value, phoneTypes) ? true : "Sorry that is not a valid input",
    	trigger: ({value}) => value.toLowerCase() === 'back' ? 'back' : 'productDetails'
    }
]

export default phones;


