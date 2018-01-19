import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';

class Product extends Component {
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
        console.log(product)
        product = product.toLowerCase().replace(/ +/g, "");
        console.log(product)
        return (
            <div className="product-details">
                <h3>Product Details</h3>
                <table>
                        <ProductInfo product = {product} />
                </table>
            </div>
        );
    }
}

Product.propTypes = {
    steps: PropTypes.object,
};

Product.defaultProps = {
    steps: undefined,
};

export default Product;




















