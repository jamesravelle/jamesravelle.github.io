import React from 'react';
import '../Hero/Hero.css'
import Button from '../Button/Button'
import divider from '../Images/wavy-motion-top.png'
import Particles from 'react-particles-js';

function Hero(props) {
    const heightComp = props.height;
    const bgColor = props.bgColor;
    const introText = 
    <p>
</p>;

    return (
        <div class="content">
           <div id="large-header" class="large-header" >
              <div className="main-title">
                  <h1 className="text-shadow" style={{marginBottom: "20px"}}>Hello, I'm James Ravelle</h1>
                  <div className="intro">
                    <p>
                    Thank you for visiting my portfolio - I built it with <a href="https://github.com/jamesravelle/jamesravelle.github.io" target="_blank">React.js</a> :) I am a full stack web developer with several years of experience building websites and applications.
                    </p>
                    <div className="row">
                        <div className="col">
                            <Button url={"#work"} targetBlank={false}>View Work<i class="fa fa-chevron-right" aria-hidden="true"></i></Button>
                        </div>
                    </div>
                </div>
                <div className="connect-with-me">
                    <h3 className="text-shadow">Connect With Me:</h3>
                    <hr style={{backgroundColor:"white"}} />
                    <div className="row">
                        <a href="mailto:james.ravelle@gmail.com" className="col-md-3 nav-link"><i class="fa fa-envelope" aria-hidden="true"></i><span className="connect-icon-text">Email</span></a>
                        <a href="https://github.com/jamesravelle/" target="_blank" className="col-md-3 nav-link"><i class="fa fa-github" aria-hidden="true" title="GitHub"></i><span className="connect-icon-text">GitHub</span></a>
                        <a href="https://www.linkedin.com/in/james-ravelle-bb640067/" target="_blank" className="col-md-3 nav-link"><i class="fa fa-linkedin-square" aria-hidden="true" title="LinkedIn"></i><span className="connect-icon-text">LinkedIn</span></a>
                        <a href="https://raw.githubusercontent.com/jamesravelle/react-portfolio/main/public/files/JamesRavelle_Resume.pdf" target="_blank" className="col-md-3 nav-link"><i class="fa fa-file-text" aria-hidden="true" title="Resume"></i><span className="connect-icon-text">Resume</span></a>
                    </div>
                </div>
                
              </div>
              <Particles
                params={{
                    "particles": {
                      "number": {
                        "value": 150,
                        "density": {
                          "enable": true,
                          "value_area": 1000
                        }
                      },
                      "color": {
                        "value": "#ffffff"
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#000000"
                        },
                        "polygon": {
                          "nb_sides": 5
                        },
                        "image": {
                          "src": "img/github.svg",
                          "width": 100,
                          "height": 100
                        }
                      },
                      "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": .5,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 40,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#00ffa2",
                        "opacity": 0.4,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 2
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }} />
            </div>
        </div>
    );
  }
  
  export default Hero;