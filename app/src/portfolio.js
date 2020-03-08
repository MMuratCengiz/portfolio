import React from 'react';
import OChessFrame from './images/ochess.gif'
import NA from './images/na.png'

class PortfolioEntry extends React.Component {
    render() {
        return <div className={"entry"}><div className={"background"} />
            <div className={"row"}>
                <div className={"column"}><img src={this.props.image_url} alt={""} className={"portfolio-image"}/></div>
                <div className={"column"}>
                    <span className={"title"}><h3>{this.props.title}</h3></span>
                    <span><b className={"portfolio-cat"}>Description:</b> {this.props.description}</span><br/>
                    <span><b className={"portfolio-cat"}>Technologies Used: </b>{this.props.techs}</span><br/>
                    <span><b className={"portfolio-cat"}>GitHub Url: </b>{this.props.url}</span><br/>
                    <span><b className={"portfolio-cat"}>Project Development Year: </b>{this.props.year}</span>
                </div>
            </div>
        </div>
    }
}

class PortfolioContent extends React.Component {
    render() {
        return <div id="content-inner2">
            <h1>Personal Projects: </h1>
            {this.ochess()}
            {this.aklocking()}
            {this.game()}
        </div>;
    }

    ochess() {
        return <PortfolioEntry title={"OChess"} image_url={OChessFrame}
                               description={"Fully fledged multiplayer chess game, supports the almost-full feature " +
                               "set of Chess, additionally supports a lobby and a stat system."}
                               techs={"Java, Spring Boot, Hibernate, WebSockets, WebMVC, PostgreSQL pure JS and CSS."}
                               url={<a
                                   href={"https://github.com/MMuratCengiz/ochess"}>/MMuratCengiz/ochess</a>}
                               year={"2020"}/>;
    }

    aklocking() {
        return <PortfolioEntry title={"AKLocking"} image_url={NA}
                               description={"A distributed lock management system, the application handles locking" +
                               " multitudes of files in a file system that the server accesses, optimizes read/write" +
                               " locking as well load balancing of the lock manager processes, this was done from a " +
                               "demand by a masters student to demonstrate his study."}
                               techs={"Pure Java sockets, JavaFX is also used to allow non-dev people to try it out."}
                               url={"Todo"}
                               year={"2018"}/>;
    }

    game() {
        return <PortfolioEntry title={"Heeli"} image_url={NA}
                               description={"A game developed to present the usage of scripting languages " +
                               "in a game engine, this game exposes a large portion of the draw calls to the " +
                               "scripting language."}
                               techs={"C++, SDL2 and Lua."}
                               url={"Todo"}
                               year={"2016"}/>;
    }
}

export default PortfolioContent;