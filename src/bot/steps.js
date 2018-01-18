import React from 'react';
import Product from '../components/Product';
import phones from './phones';
import drones from './drones';
import gaming from './gaming';
import computers from './computers';
import wearables from './wearables';
import home from './home';
import productDetails from '../bot/productDetails';

const initial = [
    {
        id: '1',
        message: 'Welcome to the ChatBot! We have a wide variety of products available to rent.',
        trigger: '2',
    },
    {
        id: '2',
        message: "First choose a category to see what's available. You can type 'back' at anytime to start over.",
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
        id: 'summary',
        user: true,
        validator: value => {
            let product = value.replace(/ +/g, "");
            product = product.toLowerCase();
            let productArr = Object.keys(productDetails);
            if(value.toLowerCase() === 'back') {
                return true;
            } else if (!productArr.includes(product)) {
                return 'Sorry that is not a valid entry!';
            }
            return true;
        },
        trigger: ({value}) => {
            if(value.toLowerCase() === 'back') {
                return 'back';
            } else {
                return 'summary2';
            }
        }
    },
    {
        id: 'summary2',
        component: <Product />,
        asMessage: true,
        trigger: 'end'
    },
    {
        id: 'end',
        options: [
            { value: 'Start Over', label: 'Start Over', trigger: '3' }
        ]
    },
    {
        id: 'back',
        message: 'Going Back......',
        trigger: '3'
    },
]

const steps = initial.concat(phones, drones, gaming, computers, wearables, home);

export default steps;



















































