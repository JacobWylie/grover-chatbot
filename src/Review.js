import React, { Component } from 'react';
import PropTypes from 'prop-types';
import productDetails from './productDetails';

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            summary: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { summary } = steps;
        this.setState({ summary });
    }

    render() {
        const { summary } = this.state;
        let product = summary.value;
        product = product.replace(/ +/g, "");
        return (
            <div className="product-details">
                <h3>Product Details</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><span className="product">Brand</span>: {productDetails[product].brand}</td>
                        </tr>
                        <tr>
                            <td><span className="product">Model</span>: {productDetails[product].name}</td>
                        </tr>
                        <tr>
                            <td><span className="product">Specs</span>: {productDetails[product].specs}</td>
                        </tr>
                        <tr>
                            <td><span className="product">Price</span>: {productDetails[product].price}</td>
                        </tr>
                        <tr className="center">
                            <td><img src={productDetails[product].img} alt='product photo'></img></td>
                        </tr>
                        <tr className="center">
                            <td><a target="_blank" href={productDetails[product].link}>Order Now!</a></td>
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

export default Review