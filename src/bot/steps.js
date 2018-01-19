import React from 'react';
import Product from '../components/Product';
import phones from './phones';
import drones from './drones';
import gaming from './gaming';
import computers from './computers';
import wearables from './wearables';
import home from './home';
import productChoice from './productChoice';
import inProductList from './inProductList';
import brandsAvailable from './brandsAvailable';

const initial = [
    {
        id: '1',
        message: 'Welcome to the ChatBot! We have a wide variety of products available to rent.',
        trigger: '2',
    },
    {
        id: '2',
        message: "First choose a category to see what's brands are available. You can type 'back' at anytime to start over.",
        trigger: '3',
    },
    {
        id: '3',
        options: [
            { value: 'Phones & Tablets', label: 'Phones & Tablets', trigger: '4' },
            { value: 'drones', label: 'Drones', trigger: '4' },
            { value: 'gaming', label: 'Gaming & VR Devices', trigger: '4' },
            { value: 'Computers', label: 'Computers', trigger: '4' },
            { value: 'wearables', label: 'Wearables', trigger: '4' },
            { value: 'home', label: 'Smart Home Appliances', trigger: '4' }
        ],
    },
     {
        id: '4',
        message: ({previousValue}) => brandsAvailable(previousValue),
        trigger: 'phones3'
    },
    {
        id: 'productDetails',
        message: ({previousValue}) => productChoice(previousValue),
        trigger: 'summary'
    },
    {
        id: 'summary',
        user: true,
        validator: value => inProductList(value),
        trigger: ({value}) => value.toLowerCase() === 'back' ? 'back' : 'summary2'
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



















































