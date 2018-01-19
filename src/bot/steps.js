import React from 'react';
import Product from '../components/Product';
import helperFunctions from './functions';

let categories = helperFunctions.populateCategories();
const steps = [
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
        options: categories
    },
     {
        id: '4',
        message: ({previousValue}) => helperFunctions.brandsAvailable(previousValue),
        trigger: 'productTypes'
    },
    {
        id: 'productTypes',
        user: true,
        validator: value => helperFunctions.productTypes(value) ? true : "Sorry that is not a valid input",
        trigger: ({value}) => value.toLowerCase() === 'back' ? 'back' : 'productDetails'
    },
    {
        id: 'productDetails',
        message: ({previousValue}) => helperFunctions.productChoice(previousValue),
        trigger: 'summary'
    },
    {
        id: 'summary',
        user: true,
        validator: value => helperFunctions.inProductList(value) ? true : "Sorry that is not a valid input",
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

export default steps;



















































