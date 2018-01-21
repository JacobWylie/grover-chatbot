import React from 'react';
import Product from '../components/Product';
import helperFunctions from './functions';
import axios from "axios"

let p
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
        options: helperFunctions.populateCategories()
    },
     {
        id: '4',
        message: ({previousValue}) => helperFunctions.brandsAvailable(previousValue),
        trigger: 'productTypes'
    },
    {
        id: 'productTypes',
        user: true,
        validator: function(value) {
            getData(value, this.id).then(x => p = x.data);
            return p;
        },
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
        validator: function(value) {
            p = "nope"
            getData(value, this.id).then(x => p = x.data);
            console.log(p)
            return p;
        },
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

function foo(value, id, callback) {
    getData(value, id).then(x=>p=x.data).then(x=>callback(x))
}

function getData(value, id) {
    return axios.get('http://localhost:8085/chatbot', {params: { value: value, func: id }})
}

// async function response(value, id) {
//     let data = await getData(value, id);
//     return data.data
// }

export default steps;



















































