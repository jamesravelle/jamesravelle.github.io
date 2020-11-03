import React from 'react';
import "../Header/Header.css"

function Header() {
// Sticky Header
var menu = '';
var sticky = '';
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  // Get the header
  menu = document.getElementById('menu-toggler');
  stickyFilter();
};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFilter() {
  if (window.pageYOffset > sticky) {
    menu.classList.add('sticky-menu');

  } else {
    menu.classList.remove('sticky-menu');
  }
}

  let menuHidden = true;

  const menuToggle = () => {
    var elem = document.querySelector('#menu');
    if(menuHidden){
      menuHidden = false;
      elem.classList.remove('menu-closed');
      elem.classList.add('menu-open');
      
    } else {
      menuHidden = true;
      elem.classList.add('menu-closed');
      elem.classList.remove('menu-open');
    }
  }

    return (
        <header>
          <nav className="navbar navbar-expand-md">
          <div id="menu-toggler"><i className="fa fa-bars menu-toggler" aria-hidden="true" onClick={menuToggle}></i></div><a href="#" className="navbar-brand nav-link">James Ravelle</a>
              <div id="menu-icons-bg">
              <div class="menu-icons-wrap" id="icon-links">
                <a href="mailto:james.ravelle@gmail.com" className="menu-icons"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                <a href="https://github.com/jamesravelle/" target="_blank"  className="menu-icons"><i class="fa fa-github" aria-hidden="true" title="GitHub"></i></a>
                <a href="https://www.linkedin.com/in/james-ravelle-bb640067/" target="_blank"  className="menu-icons"><i class="fa fa-linkedin-square" aria-hidden="true" title="LinkedIn"></i></a>
                <a href="https://raw.githubusercontent.com/jamesravelle/react-portfolio/main/public/files/JamesRavelle_Resume.pdf" target="_blank"  className="menu-icons"><i class="fa fa-file-text" aria-hidden="true" title="Resume"></i></a>
              </div>
              </div>
          </nav>
          <div id="menu" className="menu-closed">
            <div className="menu-close" onClick={menuToggle}><i class="fa fa-times" aria-hidden="true"></i></div>
            <br/>
              <a className="nav-link" href="#aboutme">About Me</a><br />
              <a className="nav-link" href="#applications">Applications</a><br />
              <a className="nav-link" href="#websites">Websites</a><br />
              <div class="collapse-menu-icons" id="icon-links">
                Connect with me:<br />
                <a href="mailto:james.ravelle@gmail.com" className="menu-icons"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                <a href="https://github.com/jamesravelle/" target="_blank"  className="menu-icons"><i class="fa fa-github" aria-hidden="true" title="GitHub"></i></a>
                <a href="https://www.linkedin.com/in/james-ravelle-bb640067/" target="_blank"  className="menu-icons"><i class="fa fa-linkedin-square" aria-hidden="true" title="LinkedIn"></i></a>
                <a href="https://raw.githubusercontent.com/jamesravelle/react-portfolio/main/public/files/JamesRavelle_Resume.pdf" target="_blank"  className="menu-icons"><i class="fa fa-file-text" aria-hidden="true" title="Resume"></i></a>
              </div>
          </div>
        </header>
    );
  }
  
  export default Header;