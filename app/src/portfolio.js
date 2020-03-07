import React from 'react';

class PortfolioEntry extends React.Component {
    render() {
        return <div class={"portfolio_entry"}>
            <span className={"title"}>{this.props.title}</span><br/>
            <img className={"portfolio_image"} src={this.props.image_url} />
            <span><b>Description:</b> {this.props.description}</span><br/>
            <span><b>GitHub Url: </b>{this.props.url}</span><br/>
            <span><b>Project Development Year: </b>{this.props.year}</span>
        </div>
    }
}

class PortfolioContent extends React.Component {
    render() {
        return <div id="content-inner2">
            <PortfolioEntry title={"OChess"} image_url={"images/ochess.png"} description={this.oChessDescription()}/>
        </div>;
    }

    oChessDescription() {
        return "";
    }
}

export default PortfolioContent;