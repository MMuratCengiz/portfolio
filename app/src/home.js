import React from 'react';


// ---- CONTENT START ----
let content = 
    <div className="content">
        <div id="content-inner0">
            <div id="profile_image" />
            <p className="bio">
                Hi, I'm Murat. I am a multi-purpose <b>software developer</b>, I'm experienced in <span>Networking</span>, <span>Backend development</span> and <span>Compiler theory</span><br />
                <br />
                My core values are:
                <ul>
                    <li><span>Simplicity: </span> Every great innovation, </li>
                </ul>
            </p>
        </div>
    </div>
;
// ---- CONTENT END ----


export class HomeContent extends React.Component {
    render() {
        return content;
    }
}

export default HomeContent;