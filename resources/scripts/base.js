'use strict';

const e = React.createElement;

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.NAVCODE = {
            HOME: 0,
            CV: 1,
            PORTFOLIO: 2,
            CONTACT: 3
        };

        this.state = { code: HOME };
    }

    render() {
        switch (this.state.code) {
            case this.NAVCODE.HOME:
                return this.home();
            case this.NAVCODE.CV:
                return this.cv();
            case this.NAVCODE.PORTFOLIO:
                return this.portfolio();
            case this.NAVCODE.CONTACT:
                return this.contact();
        }
    }

    home() {
        alert("a");
        return "home";
    }

    cv() {
        return "cv";
    }

    portfolio() {
        return "portfolio";
    }

    contact() {
        return "contact";
    }
}


const content = document.querySelector('#content');
ReactDOM.render(e(Navigation), content);

function nav(code) {
    e.setState({ code: code });
}