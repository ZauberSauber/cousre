import React from 'react';
import { withRouter } from 'react-router-dom';

import './nextBtn.css';

class NextBtn extends React.Component {
    constructor(props) {
        super(props)
    }

    goToPage() {
        this.props.history.push('/chapter2/page2_2')
    }

    render() {
        return (
            <button
                className={'next-btn'}
                onClick={this.goToPage.bind(this)}
            >
                {name}
            </button>
        )
    }
}

export default withRouter(NextBtn);
