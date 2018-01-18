import validTypes from './validTypes';

const computerTypes = ['apple', 'microsoft', 'lenovo', 'back'];

const computers = [
    {
        id: 'computers1',
        message: "Right on! Let's see what we have",
        trigger: 'computers2'
    },
    {
    	id: 'computers2',
    	message: ({previousValue}) => previousValue,
    	trigger: 'computers3'
    },
    {
    	id: 'computers3',
    	user: true,
    	validator: value => !validTypes(value, computerTypes) ? "Sorry that is not a valid input" : true,
    	trigger: 'productDetails'
    }
]

export default computers;



















