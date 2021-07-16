import React, { Component } from 'react'
import {
    Link,
    Switch,
    Route,
    useParams,
} from "react-router-dom";

import Brand from './pages/brandMn/brand';
import Cate from './pages/cateMn/cate';
import Home from './pages/home';
import Payment from './pages/paymentMn/payment';
import Product from './pages/productMn/product';


function Management() {
    let { action } = useParams();
    var renderChild = '';

    if (action === 'brand') {
        renderChild = <Brand />
    } else if (action === 'category') {
        renderChild = <Cate />
    } else if (action === 'product') {
        renderChild = <Product />
    } else if (action === 'payment') {
        renderChild = <Payment />
    }
    return renderChild
}

// function NavActive(){
//     let { action } = useParams();
//     var renderChild = '';

//     var handleActive = (isActive) => {
//         var classActive = {
//             navWr: "navWr", 
//             navMn: "navMn"
//         }
//         if(isActive){
//             classActive = {
//                 navWr: "navWr-active", 
//                 navMn: "navMn-active"
//             }
//         }
//         return classActive
//     }

//     if (action === 'brand') {
//         renderChild = <Nav handleActive = {() => handleActive(true)}/>
//     } else if (action === 'category') {
//         renderChild = <Nav />
//     } else if (action === 'product') {
//         renderChild = <Nav />
//     } else if (action === 'payment') {
//         renderChild = <Nav />
//     }
//     return renderChild
// }

// function Nav(props){
//     // onClick={(e) => this.navMnActive(e)}
//     return (
//         <div className="wrapper">
//             <div className="navWr">
//                 <Link to="/management/category" className="navMn">Category</Link>
//             </div>
//             <div className="navWr">
//                 <Link to="/management/brand" className="navMn">Brand</Link>
//             </div>
//             <div className="navWr">
//                 <Link to="/management/product" className="navMn">Product</Link>
//             </div>
//             <div className="navWr">
//                 <Link to="/management/payment" className="navMn">Payment</Link>
//             </div>
//         </div>
//     )
// }

export default class Content extends Component {
    navMnActive = (e) => {
        let className = e.target.className
        var navMns = document.querySelectorAll('.'+ className)
        var arr = Array.from(navMns).filter(elem => elem !== e.target)
        
        e.target.classList.add('navMn-active');
        e.target.parentElement.classList.add('navWr-active');

        arr.forEach(element => {
            element.classList.remove('navMn-active');
            element.parentElement.classList.remove('navWr-active');
        });
    }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/management">
                    <div className="main">
                        <div className="content grid">
                            <div className="wide">
                                <div className="row">
                                    <div className="col l-3">
                                        {/* <Route path="/management/:action" children={<NavActive />} /> */}
                                        <div className="wrapper">
                                            <div className="navWr">
                                                <Link 
                                                    to="/management/category" 
                                                    className="navMn" 
                                                    onClick={(e) => this.navMnActive(e)}
                                                    >Category
                                                </Link>
                                            </div>
                                            <div className="navWr">
                                                <Link 
                                                    to="/management/brand" 
                                                    className="navMn" 
                                                    onClick={(e) => this.navMnActive(e)}
                                                    >Brand
                                                </Link>
                                            </div>
                                            <div className="navWr">
                                                <Link 
                                                    to="/management/product" 
                                                    className="navMn" 
                                                    onClick={(e) => this.navMnActive(e)}
                                                    >Product
                                                </Link>
                                            </div>
                                            <div className="navWr">
                                                <Link 
                                                    to="/management/payment" 
                                                    className="navMn" 
                                                    onClick={(e) => this.navMnActive(e)}
                                                    >Payment
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col l-9">
                                        <div className="wrapper">
                                            <Route path="/management/:action" children={<Management />} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        )
    }
}
