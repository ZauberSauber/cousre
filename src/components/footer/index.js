import React from 'react';

import NextBtn from '../buttons/nextBtn';

import './footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={'footer'}>
                <NextBtn name="next"/>
            </div>
        )
    }
}