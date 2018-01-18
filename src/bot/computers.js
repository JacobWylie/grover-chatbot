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
    	message: 'Do you prefer computers made by Apple, Microsoft, or Lenovo?',
    	trigger: 'computers3'
    },
    {
    	id: 'computers3',
    	user: true,
    	validator: value => {
    		if(!validTypes(value, computerTypes)) {
            	return "Sorry that is not a valid input";
            } 
            return true; 
    	},
    	trigger: 'poductDetails'
    }
]

export default computers;



















