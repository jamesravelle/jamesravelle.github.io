import React from 'react';
import './style.css'
import Button from '../Button/Button'
function Design() {
    return (
        <div className="section-padding">
            <h1 className="sectionHeading">Marketing + Graphics</h1>
            <p style={{textAlign:"center"}}>Want to see some graphics, marketing and branding things I have created? Cool! Checkout some of that stuff here:</p>
            <div className="project-button">
            <Button url={'https://jamesravelle.github.io/marketing-lp/'}>View Projects</ Button>
            </div>
        </div>
    )
  }
  
  export default Design;