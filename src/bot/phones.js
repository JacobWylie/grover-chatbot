import validTypes from './validTypes';

const phoneTypes = ['appleiphone', 'samsunggalaxy', 'back'];

const phones = [
    {
    	id: 'phones3',
    	user: true,
    	validator: value => validTypes(value, phoneTypes) ? true : "Sorry that is not a valid input",
    	trigger: ({value}) => value.toLowerCase() === 'back' ? 'back' : 'productDetails'
    }
]

export default phones;


