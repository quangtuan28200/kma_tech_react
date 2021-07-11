import React, { Component } from 'react'
import Header from './admin/main/header'
import Content from './admin/main/content'
export default class App extends Component {
    render() {
        return (
            <div id="container">
                <Header />
                <Content />
            </div>
        )
    }
}
