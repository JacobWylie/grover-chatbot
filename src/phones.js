import validator from './validator';

const phones = [
    {
        id: 'phones1',
        message: "Great! Let's see what brands are currently available.",
        trigger: 'phones2'
    },
    {
    	id: 'phones2',
    	message: "Would you like to view our Apple or Samsung devices?",
    	trigger: 'phones3'
    },
    {
    	id: 'phones3',
    	user: true,
    	validator: validator,
    	trigger: ({value}) => value.toLowerCase()
    },
    {
    	id: 'samsung',
    	message: 'Samsung'
    },
    {
    	id: 'apple',
    	message: 'You can see the details for an "iPhone 7 128gb", "iPhone 7 32gb", or "iPhone 7 plus"',
    	trigger: 'summary'
    }
]

export default phones;


