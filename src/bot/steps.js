import React from 'react';
import Product from '../components/Product';
import helperFunctions from './functions';

const steps = [
    {
        id: '1',
        message: 'Welcome to the ChatBot! We have a wide variety of products available to rent.',
        trigger: '2',
    },
    {
        id: '2',
        message: "First choose a category to see what's brands are available. You can type 'back' at anytime to start over.",
        trigger: 'categories',
    },
    {
        id: "categories",
        options: helperFunctions.populateCategories()
    },
    {
        id: 'brandsAvailable',
        message: ({previousValue}) => helperFunctions.brandsAvailable(previousValue),
        trigger: 'productTypes'
    },
    {
        id: 'productTypes',
        user: true,
        validator: value => helperFunctions.productTypes(value),
        trigger: ({value}) => value.toLowerCase() === 'back' ? 'back' : 'productDetails'
    },
    {
        id: 'productDetails',
        message: ({previousValue}) => helperFunctions.productChoice(previousValue),
        trigger: 'inProductList'
    },
    {
        id: 'inProductList',
        user: true,
        validator: value => helperFunctions.inProductList(value),
        trigger: ({value}) => value.toLowerCase() === 'back' ? 'back' : 'summary'
    },
    {
        id: 'summary',
        component: <Product />,
        asMessage: true,
        trigger: 'end'
    },
    {
        id: 'end',
        options: [
            { value: 'Start Over', label: 'Start Over', trigger: 'categories' }
        ]
    },
    {
        id: 'back',
        message: 'Going Back......',
        trigger: 'categories'
    },
]

export default steps;



















































