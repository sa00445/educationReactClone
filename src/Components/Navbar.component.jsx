import React from 'react';
import './navbar.styles.css'
 
export class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div class="nav-wrapper">
                    <img className="logo" src="https://educationwp.thimpress.com/wp-content/uploads/2015/10/favicon.png"></img><a href="#" class="brand-logo">EDUMA</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">DEMOS <i class="fas fa-chevron-down fa-sm"></i></a></li>
                        <li><a href="badges.html">COURSES</a></li>
                        <li><a href="collapsible.html">FEATURES</a></li>
                        <li><a href="collapsible.html">EVENTS</a></li>
                        <li><a href="collapsible.html">GALLERY</a></li>
                        <li><a href="collapsible.html">BLOG</a></li>
                        <li><a href="collapsible.html">CONTACT</a></li>
                        <li><a href="collapsible.html">SHOP</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

