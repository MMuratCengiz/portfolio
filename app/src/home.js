import React from 'react';
import Utils from './utils';
import "./css/home.css";
import {gsap} from 'gsap';

function color(text, bolden = false) {
    if (bolden) {
        return <b>{color(text, false)}</b>
    }

    return <span style={{color: Utils.randomColor()}}>{text}</span>
}

// ---- CONTENT START ----
let content =
    <div id="content-inner0">
        <p className={"bio"}>
            Hi, I'm Murat. I am a {color("Software Developer", true)} for more than {color("4", true)} years, I'm experienced in {color("Networking")}, {color("Backend development")} and in {color("Compiler Theory")}.<br />
            <br />
            My core values are:
        </p>
        <ul>
                <li>{color("Simplicity: ", true)} if a solution is simple and elegant, it may not always be correct, but it has the highest chance that a developer implements it.</li>
                <li>{color("Communication: ", true)} humans are social creatures, and communication has been {color("the number 1")} reason of human domination, imagine if we were actually good at it.</li>
                <li>{color("Persistence: ", true)} punch a mountain once and nothing happens, punch it a thousand times and you break your hand. Persistence gives {color("results")}.</li>
            </ul>
        <p>
        I am, in general open to offers, and I'll definitely be wanting to hear from you if you are anything near technology.
        </p>
    </div>
;
// ---- CONTENT END ----

let moveToRight = true;

export class HomeContent extends React.Component {
    componentDidMount() {
        document.getElementById("profile_image").onmouseenter = () => {
            gsap.to("#profile_image", { x: moveToRight ? "200%" : "5%", rotateZ: moveToRight ? 180: 0 });
            moveToRight = !moveToRight;
        };

        document.getElementById("profile_image").onmouseenter = null; // disable goof for now
    }

    render() {
        return content;
    }
}

export default HomeContent;