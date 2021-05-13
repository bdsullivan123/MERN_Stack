import React from 'react'
import { Router } from '@reach/router';
import WelcomeComponent from './WelcomeComponent';
import WordComponent from './WordComponent';
import PickColor from './PickColor';

const Central = () => {
    return (
        <div>
            <Router>
                <WelcomeComponent path="/home" />
                <WordComponent path="/:id" />
                <PickColor path="/:id/:color1/:color2" />
            </Router>
        </div>
    )
}

export default Central
