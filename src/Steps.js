import phones from './phones';
import drones from './drones';
import gaming from './gaming';
import computers from './computers';
import wearables from './wearables';
import home from './home';

const initial = [
    {
        id: '1',
        message: 'Welcome to the ChatBot! We have a wide variety of products available to rent.',
        trigger: 'category',
    },
    {
        id: 'category',
        message: "Please click on which type are you interested in?",
        trigger: '3',
    },
    {
        id: '3',
        options: [
            { value: 'Phones & Tablets', label: 'Phones & Tablets', trigger: phones[0].id },
            { value: 'Drones', label: 'Drones', trigger: drones[0].id },
            { value: 'Gaming & VR Devices', label: 'Gaming & VR Devices', trigger: gaming[0].id },
            { value: 'Computers', label: 'Computers', trigger: computers[0].id },
            { value: 'Wearables', label: 'Wearables', trigger: wearables[0].id },
            { value: 'Smart Home Appliances', label: 'Smart Home Appliances', trigger: home[0].id }
        ],
    },
    {
        id: 'go back',
        message: 'Going Back......',
        trigger: 'category'
    },
    // {
    //     id: 'review',
    //     component: <Review />,
    //     asMessage: true,
    //     trigger: 'update',
    // },
]

const steps = initial.concat(phones, drones, gaming, computers, wearables, home);
export default steps


















































