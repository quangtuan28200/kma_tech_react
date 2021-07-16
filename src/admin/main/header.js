import React, { Component } from 'react'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

function RenderHeader(props) {
    return (
        <header>
            <div className={props.class}>
                <div className="header__wrap wide">
                    <div className="header_name">
                        <Link to="/home">Adminstrator</Link>
                    </div>
                    <div className="header__user">
                        <i className="fas fa-user-circle" />
                        <a href="asd" className="header__userLink">admin</a>
                        {/* userMenu */}
                        <ul className="header__userMenu">
                            <li className="header__userItem">
                                <Link to="/management/category" className="userItem__Link">Product category management</Link>
                            </li>
                            <li className="header__userItem">
                                <Link to="/management/brand" className="userItem__Link">Product brand management</Link>
                            </li>
                            <li className="header__userItem">
                                <Link to="/management/product" className="userItem__Link">Product management</Link>
                            </li>
                            <li className="header__userItem">
                                <Link to="/management/payment" className="userItem__Link">Payment management</Link>
                            </li>
                            <li className="header__userItem">
                                <a href="?logout" className="userItem__Link">
                                    Log out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
} 
export default class Header extends Component {
    render() {  
        return (
            <Switch>
                <Route exact path="/">
                    <RenderHeader 
                        class = 'header__container grid'
                    />
                </Route>
                <Route path="/home">
                    <RenderHeader 
                        class = 'header__container grid'
                    />
                </Route>
                <Route path="/management">
                    <RenderHeader 
                        class = 'header__containerMn grid'
                    />
                </Route>
            </Switch>
        )
    }
}