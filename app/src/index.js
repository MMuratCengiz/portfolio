import React from 'react';
import ReactDOM from 'react-dom';
import HomeContent from './home.js';
import CVContent from './cv.js';
import PortfolioContent from './portfolio.js';
import ContactContent from './contact.js';
import Utils from './utils.js';
import { gsap } from 'gsap';

import './css/common.css'


let NavCode = {
    Home: 0,
    CV: 1,
    Portfolio: 2,
    Contact: 3
};

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <HomeContent />;
    }
}

class Root extends React.Component {
    constructor(props) {
        super(props);

        this.content = null;

        this.state = {
            nav_code: NavCode.Home
        };
    }

    render() {
        let header = null
        let nav = null;
        
        switch (this.state.nav_code) {
            case NavCode.Home:
                header = "Home";
                nav = <HomeContent/>
                break;
            case NavCode.CV:
                header = "CV";
                nav = <CVContent/>;
                break;
            case NavCode.Portfolio:
                header = "Portfolio";
                nav = <PortfolioContent/>;
                break;
            case NavCode.Contact:
                header = "Contact";
                nav = <ContactContent/>;
                break;
        }

        return <div id="body">
            {/* <div id="header">{header}</div> */}
            <div id="nav">
                <ul>
                    {this.listEntry(NavCode.Contact, "Contact")}
                    {this.listEntry(NavCode.Portfolio, "Portfolio")}
                    {this.listEntry(NavCode.CV, "CV")}
                    {this.listEntry(NavCode.Home, "Home")}
                </ul>
            </div>
        
            {nav}
            </div>;
    }

    listEntry(activateCode, name) {
        return <li class={(this.state.nav_code === activateCode ? "active" : "")}>
            <button onClick={(e) => this.nav(activateCode)} style={{ backgroundColor: Utils.randomColor() }}>
                {name}
            </button>
        </li>
    }

    nav(code) {
        gsap.to(".content", 1, { x: 2000 });
        this.setState({ nav_code: code })
    }
}

ReactDOM.render(<Root code={NavCode.Home}></Root>, document.getElementById("root"));
