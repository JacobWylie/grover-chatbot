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
    	message: "Want to check out Samsung or Apple devices?",
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
    	options: [
            { value: 'Phones & Tablets', label: 'Phones & Tablets', trigger: 'summary' },
            { value: 'Drones', label: 'Drones', trigger: 'summary' },
            { value: 'Gaming & VR Devices', label: 'Gaming & VR Devices', trigger: 'summary' }
        ]
    }
]

export default phones

