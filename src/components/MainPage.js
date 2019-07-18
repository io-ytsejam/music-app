import React, {Component} from 'react';
import style from '../stylesheets/MainPage.scss';
import lorem from '../lorem';
import Row from './Row';

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
    }

    baconIpsum() {
        fetch(`https://baconipsum.com/api/?type=all-meat&paras=${this.state.params}&start-with-lorem=1`)
          .then(response => response.json())
          .then(data => { this.setState({ lorem: data }) })
          .catch(err => { throw err})
    }

    getPics (start, end) {
        let imgs = [];
        let x = 0;
        for (let i = start; i <= end; i++) {
            const rand = Math.floor((Math.random()*100)+start)%(end - start);
            imgs[i-start] = (
              <div className={"image-wrapper"}>
                <img src={`images/albumpics/med/${rand}.jpg`} key={start+76+i} alt={"front-page-presentation"} />
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