import React from 'react';

import GoToBtn from '../buttons/GoToBtn';

import './footer.styl';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={'footer'}>
                <GoToBtn
                    name='back'
                    direction='back'
                />
                <GoToBtn
                    name='next'
                    direction='next'
                />
            </div>
        )
    }
}