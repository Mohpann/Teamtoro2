import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={logo} alt="Logo" />
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
      </Container>
    </footer>
  )
}