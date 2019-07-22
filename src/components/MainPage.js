import React, {Component} from "react";
import style from "../stylesheets/MainPage.scss";
import lorem from "../lorem";
import Row from "./Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSlidersH} from "@fortawesome/free-solid-svg-icons/faSlidersH";
import {faHeadphonesAlt} from "@fortawesome/free-solid-svg-icons/faHeadphonesAlt";
import {faMusic} from "@fortawesome/free-solid-svg-icons/faMusic";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lorem: "",
            params: 1,
            keys: 0
        };
        this.baconIpsum = this.baconIpsum.bind(this);
        this.getPics = this.getPics.bind(this);
        this.blurCover = this.blurCover.bind(this);
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
        const images = document.querySelectorAll("div.image-wrapper img");

        const container = document.querySelector("div.container");
        const welcome = document.querySelector("div.welcome");

        container.style.filter = "blur(0.1px)";

        /*window.addEventListener("wheel", e => {
            let blur;
            if (e.deltaY > 0) {
                if (window.scrollY < parseFloat(window.getComputedStyle(welcome).height))
                    blur = parseFloat(window.getComputedStyle(container).filter.substr(5))+0.5;
            } else
                blur = parseFloat(window.getComputedStyle(container).filter.substr(5))-0.5;

            container.style.filter = `blur(${blur}px)`;
            console.info(e.deltaY);
        });*/

        window.addEventListener("scroll", e => {
            console.info(window.scrollY);
            if (window.scrollY <= 100) container.style.filter = "blur(0.1px)";
            else if (window.scrollY <= 200) container.style.filter = "blur(2px)";
            else if (window.scrollY <= 300) container.style.filter = "blur(4px)";
            else if (window.scrollY <= 400) container.style.filter = "blur(7px)";
            else if (window.scrollY <= 500) container.style.filter = "blur(10px)";
            else if (window.scrollY <= 600) container.style.filter = "blur(15px)";
            else if (window.scrollY <= 700) container.style.filter = "blur(20px)";
            else if (window.scrollY <= 800) container.style.filter = "blur(15px)";
            else if (window.scrollY <= 900) container.style.filter = "blur(20px)";
            else if (window.scrollY <= 1000) container.style.filter = "blur(21px)";
        });
    }

    baconIpsum(paragraphs) {
        let lorem;
        fetch(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&start-with-lorem=1`)
          .then(response => response.json())
          .then(data => { lorem = data } )
          .then( () => { return lorem } )
          .catch(err => { throw err});
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
                            <FontAwesomeIcon color={"#b33920"} icon={faSlidersH} size={"6x"}/>
                            <p style={{ textAlign: "center" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tortor massa. Duis ultrices laoreet libero, vel dapibus ante ornare vel. Integer egestas leo id ex rutrum laoreet. Quisque sed vulputate nulla. Sed vitae massa sollicitudin, iaculis metus ornare, accumsan nisi.
                            </p>
                        </div>
                        <div className="presentation-card">
                            <FontAwesomeIcon icon={faHeadphonesAlt} color={"#b33920"} size={"6x"}/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tortor massa. Duis ultrices laoreet libero, vel dapibus ante ornare vel. Integer egestas leo id ex rutrum laoreet. Quisque sed vulputate nulla. Sed vitae massa sollicitudin, iaculis metus ornare, accumsan nisi.
                            </p>
                        </div>
                        <div className="presentation-card">
                            <FontAwesomeIcon icon={faMusic} color={"#b33920"} size={"6x"}/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tortor massa. Duis ultrices laoreet libero, vel dapibus ante ornare vel. Integer egestas leo id ex rutrum laoreet. Quisque sed vulputate nulla. Sed vitae massa sollicitudin, iaculis metus ornare, accumsan nisi.
                            </p>
                        </div>
                    </div>
                    <div className="presentation-box-2">

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