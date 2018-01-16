import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import steps from './Steps';

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
            device: ''
        };
    }

    componentDidMount() {
        const { steps } = this.props;
        const { category, device } = steps;

        this.setState({ category, device });
    }

    render() {
        const { category, device } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Category</td>
                            <td>{category.value}</td>
                        </tr>
                        <tr>
                            <td>Device</td>
                            <td>{device.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

class SimpleForm extends Component {
    render() {
        return (
            <ChatBot
                steps={steps}
            />
        );
    }
}

export default SimpleForm; 



























