import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    routeGoNext,
    routeGoBack,
} from '../../actions/routing';

import './goToBtn.styl';

class GoToBtn extends React.Component {
    static blockClassName = 'go-to-btn';

    static propTypes = {
        className: PropTypes.string,
        name: PropTypes.string,
        direction: PropTypes.string,
        routeGoNext: PropTypes.func,
        routeGoBack: PropTypes.func,
    };

    static defaultProps = {
        className: '',
        name: 'push me',
        direction: 'next',
        routeGoNext: () => {},
        routeGoBack: () => {},
    };

    constructor(props) {
        super(props)
    }

    goToPage() {
        const {
            history,
            routeGoNext,
            routeGoBack,
            direction,
        } = this.props;

        // history.push('/chapter2/page2_2');
        // history.push(direction);
        // todo: перенести history.push в редюсер или ещё куда-нить

        if (direction === 'next') {
            routeGoNext();
        } else if (direction === 'back') {
            routeGoBack();
        }
    }

    render() {
        return (
            <button
                className={GoToBtn.blockClassName}
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

const mapDispatchToProps = dispatch => ({
    routeGoNext: () => dispatch(routeGoNext()),
    routeGoBack: () => dispatch(routeGoBack()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GoToBtn));
