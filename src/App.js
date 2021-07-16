import React, { Component } from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";

import Header from './admin/main/header'
import Content from './admin/main/content'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div id="container">
                    <Header />
                    <Content />
                </div>
            </Router>
        )
    }
}
