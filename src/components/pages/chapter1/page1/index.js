import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './page1.css';

export const Page1_1 = (props) => {
    const {
        className,
        children
    } = props;

    return (
        <div className={cx(Page1_1.blockClassName, className)}>
            <p>Page 1</p>
        </div>
    )
};

Page1_1.blockClassName = 'page-1-1';

Page1_1.propTypes = {
    className: PropTypes.string
};

Page1_1.defaultProps = {};