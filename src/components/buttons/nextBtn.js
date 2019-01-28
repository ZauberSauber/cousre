import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { routeGoTo } from "../../actions/routing";

import './nextBtn.styl';

class NextBtn extends React.Component {
    static blockClassName = 'next-btn';

    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        //
    };

    constructor(props) {
        super(props)
    }

    goToPage() {
        this.props.history.push('/chapter2/page2_2');
        this.props.routeGoTo('/chapter2/page2_2');
    }

    render() {
        return (
            <button
                className={NextBtn.blockClassName}
                onClick={this.goToPage.bind(this)}
            >
                {this.props.name}
            </button>
        )
    }
}

const mapStateToProps = state => {
    return {
        appRoute: state.appRoute
    };
};

const mapDispatchToProps = dispatch => {
    return {
        routeGoTo: path => dispatch(routeGoTo(path))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NextBtn));
