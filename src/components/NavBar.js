import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo5_edit.png';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Fighters } from "../components/Fighters.js";
import Card from 'react-bootstrap/Card';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Nav.Link style={{fontWeight: 800,color:"white", backgroundColor:"Chartreuse", fontSize: 18, opacity: 0.75}} href="https://cp.mystudio.io/t/?=MLir1u/10610/32597//1685482680" >FIRST CLASS FREE</Nav.Link>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>  
              <Nav.Link href="/Fighters" className={activeLink === 'Fighters' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Fighters')}>Fighters</Nav.Link>
              <Nav.Link href="/Schedule" className={activeLink === 'Schedule' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Schedule')}>Schedule</Nav.Link>
              <Nav.Link href="/Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact Us</Nav.Link>
              <Nav.Link href="https://cp.mystudio.io/t/?=MLir1u/10610/32597//1685482680" className={activeLink === 'FreeTrial' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('FreeTrial')}>FREE CLASS</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.facebook.com/Team-TORO-Muay-Thai-196321693761082/"><img src={navIcon2} alt="facebook" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
        <Nav.Link style={{fontWeight: 800,color:"white", backgroundColor:"Chartreuse", fontSize: 18, opacity: 0.75}} href="https://cp.mystudio.io/t/?=MLir1u/10610/32597//1685482680" >FIRST CLASS FREE</Nav.Link>
      </Navbar>
    </Router>
    
  )
}