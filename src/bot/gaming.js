const gameTypes = ['htc', 'oculus', 'back'];

const gaming = [
    {
        id: 'gaming1',
        message: "Good choice! Let's see what's available",
        trigger: 'gaming2'

    },
    {
    	id: 'gaming2',
    	message: 'We are currently offering Gaming and VR devices from HTC and Oculus. Which would you like to see?',
    	trigger: 'gaming3'
    },
    {
    	id: 'gaming3',
    	user: true,
    	validator: value => {
    		if(!gameTypes.includes(value.toLowerCase())) {
    			return 'Sorry that is not a valid input';
    		}
    		return true
    	},
    	trigger: ({value}) => value.toLowerCase()
    },
    {
    	id: 'htc',
    	message: 'We can show you the details for the "Vive"',
    	trigger: 'summary'
    },
    {
    	id: 'oculus',
    	message: 'We can show you the details for the "Rift VR"',
    	trigger: 'summary'
    }
]

export default gaming;