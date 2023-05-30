import { Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from '../assets/img/logo5_edit.png';
import { Navbar, Nav, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={logo} alt="Logo" />
          </Col>
          <Col>
            <p>Developed by <a href="https://github.com/Mohpann">Connor Hunter</a></p>
          </Col>
          <Col>
            <p>"The only true MT gym in Illinois" - Shlomi Albert</p>
          </Col>
          <Col className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/Team-TORO-Muay-Thai-196321693761082/"><img src={navIcon2} alt="Facebook link" /></a>
            </div>
            <p>Link to Facebook</p>
          </Col>
        </Row>
        <Nav.Link style={{textAlign: "center", fontWeight: 800,color:"white", backgroundColor:"Chartreuse", fontSize: 18, opacity: 0.75}} href="https://cp.mystudio.io/t/?=MLir1u/10610/32597//1685482680" >FIRST CLASS FREE</Nav.Link>
      </Container>
    </footer>
  )
}