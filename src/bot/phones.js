const phoneTypes = ['apple', 'samsung', 'back'];

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
    	validator: value => {
            if (!phoneTypes.includes(value.toLowerCase())) {
                return "Sorry that is not a valid answer";
            }
            return true;
        },
    	trigger: ({value}) => value.toLowerCase()
    },
    {
    	id: 'samsung',
    	message: 'You can see the details for a "Galaxy S8" or a "Galaxy S8 Plus"',
        trigger: 'summary'
    },
    {
    	id: 'apple',
    	message: 'You can see the details for an "iPhone 7 128gb", "iPhone 7 32gb", or "iPhone 7 plus"',
    	trigger: 'summary'
    }
]

export default phones;


