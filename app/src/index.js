import React from 'react';
import ReactDOM from 'react-dom';
import HomeContent from './home.js';
import CVContent from './cv.js';
import PortfolioContent from './portfolio.js';
import ContactContent from './contact.js';

import './css/common.css'


let NavCode = {
    Home: 0,
    CV: 1,
    Portfolio: 2,
    Contact: 3
};

class Root extends React.Component {
    constructor(props) {
        super(props);

        this.content = null;

        this.state = {
            nav_code: NavCode.Home
        };

        this.inAnimation = false;
    }

    render() {
        return <div id="body">
            <div id="nav">
                <div id="profile_image" />
                <h1 id="title">Murat Cengiz</h1>
                <ul>
                    {this.listEntry(NavCode.Contact, "Contact")}
                    {this.listEntry(NavCode.Portfolio, "Portfolio")}
                    {this.listEntry(NavCode.CV, "CV")}
                    {this.listEntry(NavCode.Home, "Home")}
                </ul>
            </div>

            <div className="content">
                <HomeContent />
                <CVContent />
                <PortfolioContent />
                <ContactContent />
            </div>
        </div>;
    }

    listEntry(activateCode, name) {
        return <li className={(this.state.nav_code === activateCode ? "active" : "")}>
            <button onClick={(e) => this.nav(activateCode)} >
                {name}
            </button>
        </li>
    }

    show(code) {
        if (code === 0) {
            window.scrollTo(0, 0);
        } else {
            window.scrollTo(0, document.getElementById("content-inner" + code).offsetTop);
        }
    }

    nav(code) {
        if (this.inAnimation) {
            return;
        }

        for (let i = 0; i <= 3; ++i) {
            document.getElementById("content-inner" + i).style.display = "block";
        }

        this.show(code);
    }

    componentDidMount() {
        document.body.onscroll = (ev) => { this.onscroll() };
    }

    onscroll() {
        if (window.scrollY < document.getElementById("content-inner1").offsetTop - 150) {
            this.setState({nav_code: 0});
        } else if (window.scrollY < document.getElementById("content-inner2").offsetTop - 150) {
            this.setState({nav_code: 1});
        } else if (window.scrollY < document.getElementById("content-inner3").offsetTop - 800) {
            this.setState({nav_code: 2});
        } else {
            this.setState({nav_code: 3});
        }
    }
}

ReactDOM.render(<Root code={NavCode.Home}/>, document.getElementById("root"));
