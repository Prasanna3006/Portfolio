import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
        <h3>Reach Me</h3>
        <div className="contact-details">
  <div className="contact-item">
    <i className="fas fa-envelope"></i>
    <p>Email us: <a href="mailto:prasannam616@gmail.com">prasannam616@gmail.com</a></p>
  </div>
  <div className="contact-item">
    <i className="fas fa-phone-alt"></i>
    <p>Phone: <a href="tel:+918610362554">+91 8610362554</a></p>
  </div><div className="social-icon">
    <a href="https://www.linkedin.com/in/prasanna-m-a09bb024a/"><img src={navIcon1} alt="Icon" /></a>
    </div>
</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
              <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
