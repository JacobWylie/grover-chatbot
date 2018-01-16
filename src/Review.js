import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            select: '',
            apple: ''
        };
    }

    componentDidMount() {
        const { steps } = this.props;
        const { select, apple } = steps;
        this.setState({ select, apple });
    }

    render() {
        const { select, apple } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Phone</td>
                            <td>{select.value}</td>
                            <td>iPhone</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>something</td>
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