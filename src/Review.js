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
            <div style={{ width: '100%' }}>
                <h3>Product Details</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>{productDetails[product].brand}</td>
                        </tr>
                        <tr>
                            <td>{productDetails[product].name}</td>
                        </tr>
                        <tr>
                            <td>{productDetails[product].price}</td>
                        </tr>
                        <tr>
                            <td><a href={productDetails[product].link}>Order Now!</a></td>
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