import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            summary: '',
            apple: ''
        };
    }

    componentDidMount() {
        const { steps } = this.props;
        const { summary, apple } = steps;
        this.setState({ summary, apple });
    }

    render() {
        const { summary, apple } = this.state;
        console.log(summary)
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>{summary.value}</td>
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