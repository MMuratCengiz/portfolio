import React from 'react';
import ReactDOM from 'react-dom';
import HomeContent from './home.js';
import CVContent from './cv.js';
import PortfolioContent from './portfolio.js';
import ContactContent from './contact.js';
import Utils from './utils.js';
import {gsap} from 'gsap';

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
        return <HomeContent/>;
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
            <div id="nav">
                <ul>
                    {this.listEntry(NavCode.Contact, "Contact")}
                    {this.listEntry(NavCode.Portfolio, "Portfolio")}
                    {this.listEntry(NavCode.CV, "CV")}
                    {this.listEntry(NavCode.Home, "Home")}
                </ul>
            </div>

            <HomeContent/>
            <CVContent/>
        </div>;
    }


    componentDidMount() {
        for (let i = 0; i <= 3; ++i) {
            document.getElementById("content-inner" + i).style.display = "none";
        }

        this.show(0);

        for (let i = 0; i <= 3; ++i) {
            document.getElementById("content-inner" + i).style.display = "inherit";
        }
    }

    hideAll() {
        for (let i = 0; i <= 3; ++i) {
            gsap.to("#content-inner" + i, { x: "200%", immediateRender: true });
        }
    }

    listEntry(activateCode, name) {
        return <li className={(this.state.nav_code === activateCode ? "active" : "")}>
            <button onClick={(e) => this.nav(activateCode)} style={{backgroundColor: Utils.randomColor()}}>
                {name}
            </button>
        </li>
    }

    show(code) {
        this.hideAll();
        gsap.to(".content-inner" + code, {x: "0%"});
    }

    nav(code) {
        this.show(code);
        this.setState({nav_code: code})
    }
}

ReactDOM.render(<Root code={NavCode.Home}/>, document.getElementById("root"));
