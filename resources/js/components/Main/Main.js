import React, { Component } from 'react';
import Header from '../partes/Header'
import Body from './Body';


export default class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }
}



