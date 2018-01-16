import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import steps from './Steps';

class SimpleForm extends Component {


    render() {
       
        return (
            <ChatBot
                steps={steps}
            />
        );
    }
}


export default SimpleForm 



























