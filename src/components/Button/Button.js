import React, {useState} from 'react';
import "../Button/Button.css"

function Button({children, url, heroUpdate, onClick, targetBlank = true}) {
    const [hoverState, setHover] = useState(false);
    return (
        <a className="buttonWrapper" href={url} target={targetBlank ? "_blank" : ""}>
                <button 
                className={hoverState ? "hover-class cta" : "cta"}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={onClick}
                >
                    {children}
                    {children === 'Live' ? <i class="fa fa-link" aria-hidden="true"></i> : ''}
                    {children === 'GitHub' ? <i class="fa fa-github" aria-hidden="true"></i> : ''}
                </button>
        </a>
    );
  }
  
  export default Button;