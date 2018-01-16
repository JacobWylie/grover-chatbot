const phones = [
    {
        id: 'phones1',
        message: 'Great! we have a wide variety of Phones & Tablets for you to choose from!',
        trigger: 'phones2'
    },
    {
    	id: 'phones2',
    	message: 'Type "back" at anyime to start over',
    	trigger: 'phones3'
    },
    {
    	id: 'phones3',
    	message: "Want to check Samsung or Apple?",
    	trigger: 'phones4'
    },
    {
    	id: 'phones4',
    	user: true,
    	trigger: ({value}) => value.toLowerCase()
    },
    {
    	id: 'samsung',
    	message: 'Samsung'
    },
    {
    	id: 'apple',
    	message: 'Would you like to see iphone7 or iphone8',
    	trigger: 'select'
    }
]

export default phones

