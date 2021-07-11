import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="header__container grid">
                    <div className="header__wrap wide">
                        <div className="header_name">
                            <a href="home">Adminstrator</a>
                        </div>
                        <div className="header__user">
                            <i className="fas fa-user-circle" />
                            <a href="asd" className="header__userLink">admin</a>
                            {/* userMenu */}
                            <ul className="header__userMenu">
                                <li className="header__userItem">
                                    <a href="?management&category" className="userItem__Link">
                                        Product category management
                                    </a>
                                </li>
                                <li className="header__userItem">
                                    <a href="?management&brand" className="userItem__Link">
                                        Product brand management
                                    </a>
                                </li>
                                <li className="header__userItem">
                                    <a href="?management&product" className="userItem__Link">
                                        Product management
                                    </a>
                                </li>
                                <li className="header__userItem">
                                    <a href="?management&payment" className="userItem__Link">
                                        Payment management
                                    </a>
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
}
