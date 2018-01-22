import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios"

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trigger: false,
            options: undefined
        };
    }

    triggerNext() {
        this.setState({ trigger: true} ,() => this.props.triggerNextStep())
    }

    renderOptions() {
        return this.state.options.map(option => {
           return(
                <div className = 'category'>
                <img className = 'category-img' src = {option.img}></img>
                <p key ={option.label}>{option.value}</p>
                </div>
            )
        })
    }

    componentWillMount() {
        axios.get('http://localhost:8085/chatbot', {params: { value: null, func: "populateCategories" }})
             .then(options => {
                this.setState({options: options.data})
            })
    }

    componentDidMount(){
        this.triggerNext()
    }

    render() {
        if(this.state.options !== undefined) {
            return (
                <div className="product-details">
                    <h3>Type Which Category You'd like to Explore</h3>
                    {this.renderOptions()}
                </div>
            );
        } 
        return(
            <div className="product-details">
                <p>...</p>
            </div>
        )

    }
}

Categories.propTypes = {
    triggerNextStep: PropTypes.func,
};

Categories.defaultProps = {
    triggerNextStep: undefined,

};

export default Categories;