import React from 'react';
import Product from '../components/Product';
import helperFunctions from './functions';
import axios from "axios";


function getData(value, id) {
    return axios.get('http://localhost:8085/chatbot', {params: { value: value, func: "productTypes" }})
}

// HOW DO YOU RETURN A VALUE FROM AXIOS REQUEST/PROMISE
// CHANGE ARROW FUNCTIONS TO FUNCTION EXPRESSIONS SO THIS.ID CAN BE USED IN AXIOS FUNC:
// FIGURE OUT WHY THIS.LOWERCASENOSPACE DOESN'T WORK IN NODE APP


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
        options: helperFunctions.populateCategories(),
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
            let x = this;
            let y;
            async function foo() {
                y = await getData(value, x.id)
                console.log(y.data)
                y = y.data
                return y
            }
            foo().then(res=> {
                y = res;
                return y
            })
        },
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
        validator: value => helperFunctions.inProductList(value),
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



















































