import validTypes from './validTypes';

const phoneTypes = ['appleiphone', 'samsung', 'back'];

const phones = [
    {
        id: 'phones1',
        message: "Great! Let's see what brands are currently available.",
        trigger: 'phones2'
    },
    {
    	id: 'phones2',
    	message: 'Would you like to view our "Apple iPhone" or Samsung devices?',
    	trigger: 'phones3'
    },
    {
    	id: 'phones3',
    	user: true,
    	validator: value => {
            if(!validTypes(value, phoneTypes)) {
                return "Sorry that is not a valid input";
            } 
            return true; 
        },
    	trigger: 'poductDetails'
    }
]

export default phones;


