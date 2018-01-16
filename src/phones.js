const link = document.createElement('a');
link.setAttribute('href', 'https://getgrover.com/de-de/products/iphone-8-64gb');
link.innerHTML = 'Iphone';

const phones = [
    {
        id: 'phones1',
        message: 'Great! we have a wide variety of Phones & Tablets for you to choose from!',
        trigger: 'phones2'
    },
    {
    	id: 'phones2',
    	message: 'Type "go back" at anyime to start over',
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
    	message: link.toString(),
    }
]

export default phones

