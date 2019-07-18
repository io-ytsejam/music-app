import React, {Component} from 'react';
import MaterialIcon from '@material/react-material-icon';
import MaterialIconButton from '@material/react-icon-button';
import MainPage from './MainPage';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import About from './About.js';
import style from '../stylesheets/NavBar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };

    this.onChange = this.onChange.bind(this);
    this.searchHandleFocusBlur = this.searchHandleFocusBlur.bind(this);
    this.animatePics = this.animatePics.bind(this);
  }

  onChange(e) {
    this.setState({searchInput: e.target.value})
  }

  animatePics() {
    const images = document.querySelectorAll("div.image-wrapper img");
    images.forEach(image => {
      /*image.style.margin = "20px";
      image.style.width = "180px";
      image.style.height = "180px";*/
      image.style.transition = "none";
      setTimeout(() => {
        setTimeout(() => {
          image.style.margin = "20px";
          image.style.width = "180px";
          image.style.height = "180px";
          setTimeout(() => {
            image.style.transition = "all 0.7s ease";
            image.style.width = "200px";
            image.style.height = "200px";
          }, 100);
        }, Math.floor(Math.random()*1000));
      }, 0)
    })
  }

  searchHandleFocusBlur(e) {
    const nav1 = document.querySelector(".nav-1-section");
    const target = e.target;

    if (e.type === "focus" && parseInt(window.getComputedStyle(target).width) <= 200)
      nav1.style.display = "none";
    else
      nav1.style.display = "flex";

  }

  render() {
    return (
        <Router>
          <div className={"navigation"}>
            <nav>
              <div className={"nav-1-section"}>
                <div className={"menu-icon"}>
                  <MaterialIconButton
                      onClick={() => alert("Menu will be opened soon")}
                  >
                    <MaterialIcon style={{color: "wheat"}} icon={"menu"} />
                  </MaterialIconButton>
                </div>
                <p className={"page-title"}>Lorem ipsum</p>
              </div>
              <div className={"nav-2-section"}>
                <input
                    type={"text"}
                    className={"search-bar"}
                    onFocus={e => this.searchHandleFocusBlur(e)}
                    onBlur={e => this.searchHandleFocusBlur(e)}
                    onChange={e => this.onChange(e)}
                    placeholder={"Type to search..."}
                />
              </div>
              <div className={"nav-3-section"}>
                <div className={"nav-buttons"}>
                  <div className={"nav-button"}><p><Link to={"/"}>Get started</Link></p></div>
                  <div onClick={this.animatePics} className={"nav-button"}><p>Join in</p></div>
                  <div className={"nav-button"}><p>Find out more</p></div>
                  <div className={"nav-button"}><p><Link to={"/about/"}>About</Link></p></div>
                  <div className={"logged-user"}><p>Loren_Insum</p></div>
                </div>
              </div>
            </nav>
              <Route path={"/"} exact component={MainPage} />
              <Route path={"/about"} component={About} />
          </div>

        </Router>
    );
  }
}

export default NavBar;