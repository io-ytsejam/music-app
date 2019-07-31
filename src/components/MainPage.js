import React, {Component} from "react";
import style from "../stylesheets/MainPage.scss";
import lorem from "../lorem";
import Row from "./Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSlidersH} from "@fortawesome/free-solid-svg-icons/faSlidersH";
import {faHeadphonesAlt} from "@fortawesome/free-solid-svg-icons/faHeadphonesAlt";
import {faMusic} from "@fortawesome/free-solid-svg-icons/faMusic";
import {faStream} from "@fortawesome/free-solid-svg-icons";
import {faTag} from "@fortawesome/free-solid-svg-icons/faTag";

class Tag extends Component {
    render() {
        return (
            <div
                className="tag"
                style={{
                    width: this.props.width,
                    flexGrow: this.props.flexGrow
                }}
            >
                <div className="tag-circle"/>
            </div>
        );
    }
}

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lorem: "",
            params: 1,
            keys: 0
        };

        /*<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tag" class="svg-inline--fa fa-tag fa-w-16 fa-3x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="wheat" style="transform: rotateZ(-45deg);"><path fill="currentColor" d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path></svg>*/

        this.baconIpsum = this.baconIpsum.bind(this);
        this.getPics = this.getPics.bind(this);
        this.blurCover = this.blurCover.bind(this);
        this.gradientAnimation = this.gradientAnimation.bind(this);
    }

    blurCover() {

    }

    componentDidMount() {
        fetch(`https://baconipsum.com/api/?type=all-meat&paras=${this.state.params}&start-with-lorem=1`)
            .then(response => response.json())
            .then(data => { this.setState({ lorem: data }) })
            .catch(err => { throw err})

        document.querySelectorAll(".welcome h1, h2")
          .forEach(el => { el.style.opacity = 1 });
        document.querySelectorAll(".welcome h1, h2")
          .forEach(el => { el.style.transform = "translateY(0)" });

        const title = document.querySelector("div.presentation-box-1-title h3");
        const svg = document.querySelectorAll("div.presentation-card svg");
        const playlist = document.querySelectorAll("div.playlist-single-position");

        window.addEventListener("scroll", () => {

            /*Animate huge icons*/
            svg.forEach(s => {
                if (window.innerHeight - s.getBoundingClientRect().top - parseInt(window.getComputedStyle(s).height) >= 0) {
                    s.style.opacity = 1;
                    s.style.transform = "translateX(0)";
                } else {
                    s.style.opacity = 0;
                    s.style.transform = "translateX(-50px)";
                }
            });

            if (window.innerHeight - playlist[1].getBoundingClientRect().top - (parseInt(window.getComputedStyle(playlist[1]).height) + 40) >= 0) {
                playlist[1].style.transform = "translate3d(-50px, -70px, 0)";
                playlist[0].style.transform = "translate3d(50px, 70px, 0)";
            } else {
                playlist[1].style.transform = "none";
                playlist[0].style.transform = "none";
            }

            if (window.innerHeight - playlist[3].getBoundingClientRect().top - (parseInt(window.getComputedStyle(playlist[3]).height) + 40) >= 0) {
                playlist[3].style.transform = "translateY(-210px)";
                playlist[1].style.transform = "none";
                playlist[2].style.transform = "translate3d(-50px, 70px, 0)";
                playlist[0].style.transform = "translate3d(50px, 140px, 0)";
                if (window.innerHeight - playlist[4].getBoundingClientRect().top - (parseInt(window.getComputedStyle(playlist[4]).height) + 60) >= 0) {
                    playlist[2].style.transform = "translate3d(-80px, 140px, 0)";
                    playlist[4].style.transform = "translate3d(30px, -70px, 0)";
                } else {
                    playlist[2].style.transform = "translate3d(-50px, 70px, 0)";
                    playlist[4].style.transform = "none";
                }
            } else {
                /*HMM*/
                playlist[2].style.transform = "none";
                playlist[3].style.transform = "none";
            }




        });

        // this.gradientAnimation(document.querySelectorAll("div.line"), "wheat");

        console.info("Hmm");

        this.blurOnScroll(document.querySelector("div.container"));
        this.reorderPlaylist = this.reorderPlaylist.bind(this);
    }

    reorderPlaylist() {
        const pos = document.querySelectorAll("div.playlist-single-position");

        pos[0].style.transform = "translate3d(0px, 210px, 0)";
        pos[4].style.transform = "translate3d(80px, -210px, 0)";

        setTimeout(() => {
            pos[1].style.transform = "translate3d(-50px, 210px, 0)";
            setTimeout(() => {
                pos[3].style.transform = "translate3d(0px, -210px, 0)";
            }, 500);
        }, 700)
    }

    baconIpsum(paragraphs) {
        let lorem;
        fetch(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&start-with-lorem=1`)
          .then(response => response.json())
          .then(data => { lorem = data } )
          .then( () => { return lorem } )
          .catch(err => { throw err});
    }

    blurOnScroll(blured) {
        window.addEventListener("scroll", e => {
            if (window.scrollY <= 100) blured.style.filter = "blur(0.1px)";
            else if (window.scrollY <= 200) blured.style.filter = "blur(2px)";
            else if (window.scrollY <= 300) blured.style.filter = "blur(4px)";
            else if (window.scrollY <= 400) blured.style.filter = "blur(7px)";
            else if (window.scrollY <= 500) blured.style.filter = "blur(10px)";
            else if (window.scrollY <= 600) blured.style.filter = "blur(15px)";
            else if (window.scrollY <= 700) blured.style.filter = "blur(20px)";
            else if (window.scrollY <= 800) blured.style.filter = "blur(15px)";
            else if (window.scrollY <= 900) blured.style.filter = "blur(20px)";
            else /*if (window.scrollY <= 1000)*/ blured.style.filter = "blur(21px)";
        });
    }

    gradientAnimation(lines, accentColor) {
        let i = 0;

        setInterval(() => {
            lines.forEach(line => {
                line.style.background = `linear-gradient(135deg, #a2a2a2 0%, ${accentColor} ${i++%300}%,#bebebe 100%)`;
                if (!(i%600)) i = 20;
            });
        }, 30);
    }

    getPics (start, end) {
        let imgs = [];
        let x = 0;
        for (let i = start; i <= end; i++) {
            const rand = Math.floor((Math.random()*100)+start)%(end - start);
            imgs[i-start] = (
              <div className={"image-wrapper"}>
                <img
                  src={`/images/albumpics/med/${rand}.jpg`}
                  key={start+76+i}
                  alt={"front-page-presentation"}
                />
              </div>
            );
        }
        return imgs;
    }

    render() {
        return (
            <div
                className={"mainpage-component"}
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <div className={"absolute-cover"}>
                    <div className="welcome">
                        <h1 id="welcome-1">
                            Welcome to the greatest music catalog
                        </h1>
                        <h2 id="welcome-2">
                            You can find here, anything you could imagine and we are
                            ready to face off with your sophisticated taste of music.
                        </h2>
                        <h2 id="welcome-3">Just take a look at those samples <i className="em em-heart"/></h2>
                    </div>

                    <div className={"presentation"}>
                    <div className="presentation-box-1-title">
                        <h3>Lorem ipsum tabula rasa</h3>
                    </div>
                    <div className="presentation-box-1">
                        <div className="presentation-card">
                            <h4>Lorem ipsum</h4>
                            <FontAwesomeIcon color={"#b33920"} icon={faSlidersH} size={"6x"}/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tortor massa. Duis ultrices laoreet libero, vel dapibus ante ornare vel. Integer egestas leo id ex rutrum laoreet. Quisque sed vulputate nulla. Sed vitae massa sollicitudin, iaculis metus ornare, accumsan nisi.
                            </p>
                        </div>
                        <div className="presentation-card">
                            <h4>Dolor sit</h4>
                            <FontAwesomeIcon icon={faHeadphonesAlt} color={"#b33920"} size={"6x"}/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tortor massa. Duis ultrices laoreet libero, vel dapibus ante ornare vel. Integer egestas leo id ex rutrum laoreet. Quisque sed vulputate nulla. Sed vitae massa sollicitudin, iaculis metus ornare, accumsan nisi.
                            </p>
                        </div>
                        <div className="presentation-card">
                            <h4>Amet consectetur</h4>
                            <FontAwesomeIcon icon={faMusic} color={"#b33920"} size={"6x"}/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tortor massa. Duis ultrices laoreet libero, vel dapibus ante ornare vel. Integer egestas leo id ex rutrum laoreet. Quisque sed vulputate nulla. Sed vitae massa sollicitudin, iaculis metus ornare, accumsan nisi.
                            </p>
                        </div>
                    </div>
                        <div className="presentation-box-1-title">
                            <h3>Duis venenatis mi nibh</h3>
                        </div>
                    <div className="presentation-box-2">
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "20px",
                            maxWidth: "1000px"
                        }}>
                            <h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sollicitudin vitae consequat eget, imperdiet id enim.
                            </h4>
                        <div className="playlist">
                            <p style={{flexGrow: 2, flexBasis: "400px"}}>
                                Maecenas facilisis ex ut dignissim bibendum. Proin gravida felis vel porttitor tempus. Sed dapibus ex metus, non scelerisque nisi rhoncus vel. Phasellus nibh quam, sodales laoreet finibus id, ullamcorper in lacus. Pellentesque dignissim sapien ante, nec placerat erat luctus et. Donec leo metus, imperdiet vel erat ac, maximus laoreet risus. Duis venenatis mi nibh. In ac tortor lacus. Curabitur eget accumsan massa, a tincidunt massa. Nullam tempor id ipsum quis blandit.
                            </p>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                paddingRight: "50px"
                            }}>
                                <div className="playlist-single-position">
                                    <div className="line-artwork" style={{
                                        background: "lightsalmon"
                                    }}/><div className="line"/>
                                </div>
                                <div className="playlist-single-position">
                                    <div className="line-artwork" style={{
                                        background: "crimson"
                                    }}/><div className="line"/>
                                </div>
                                <div className="playlist-single-position">
                                    <div className="line-artwork" style={{
                                        background: "red"
                                    }}/><div className="line"/>
                                </div>
                                <div className="playlist-single-position">
                                    <div className="line-artwork" style={{
                                        background: "firebrick"
                                    }}/><div className="line"/>
                                </div>
                                <div className="playlist-single-position">
                                    <div className="line-artwork" style={{
                                        background: "darkred"
                                    }}/><div className="line"/>
                                </div>
                            </div>

                        </div>
                        </div>
                    </div>
                        <div className="presentation-box-3-title">
                            <h3>Minus, vel.</h3>
                        </div>
                        <div className="presentation-box-3">
                            <div className="tags-box">
                                <Tag flexGrow={9} />
                                <Tag flexGrow={3} />
                                <Tag flexGrow={1} />
                                <Tag flexGrow={7} />
                                <Tag flexGrow={2} />
                            </div>
                        </div>
                </div>
                </div>
                <div className={"container"}>
                    <Row pics={this.getPics(0, 15)}/>
                    <Row pics={this.getPics(16, 30)}/>
                    <Row pics={this.getPics(31, 45)}/>
                    <Row pics={this.getPics(46, 60)}/>
                    <Row pics={this.getPics(61, 75)}/>
                </div>
            </div>
        );
    }
}

export default MainPage;