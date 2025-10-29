import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import logo from "../../assets/images/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { NavDropdown } from "react-bootstrap";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import PartnershipPage from "../pages/PartnershipPage/PartnershipPage";
import styles from './navbar.module.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };


return (
  <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            href="/"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Home22222
          </Nav.Link>
          <Nav.Link
            href="/scholarships"
            className={
              activeLink === "scholarships"
                ? "active navbar-link"
                : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("scholarships")}
          >
            Scholarships22222
          </Nav.Link>
          {/* <Nav.Link 
            href="/resources" className={activeLink === "resources" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("resources")}> Resources
          </Nav.Link>  */}
          <Nav.Link
            href="/aboutUs"
            className={
              activeLink === "aboutUs" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("aboutsUs")}
          >
            AboutUs
          </Nav.Link>
          <Nav.Link
            href="/contacts"
            className={
              activeLink === "contacts" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("contacts")}
          >
            Contact Us
          </Nav.Link>
        </Nav>
        <span className="navbar-text">
          {/* <div className="social-icon">
            <a href="https://www.linkedin.com/in/kel-chai-ich-foundation/">
              <img src={navIcon1} alt="" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61550845261660&mibextid=LQQJ4d">
              <img src={navIcon2} alt="" />
            </a>
            <a href="https://instagram.com/kel_chai_ich?igshid=MzMyNGUyNmU2YQ==">
              <img src={navIcon3} alt="" />
            </a>
          </div> */}
          <Nav.Link href="/partnership"> 
          <button className="vvd">
            <span>Let's Connect</span>
          </button>
          </Nav.Link>
        </span>
      </Navbar.Collapse>
      <hr></hr>
    </Container>
    
  </Navbar>
);

}

{/* <NavDropdown title="Scholarships" id="basic-nav-dropdown" 
          className={activeLink === "scholarships" ? "active navbar-link" : "navbar-link"}
          onClick={() => onUpdateActiveLink("skills")}>
              <NavDropdown.Item href="/undergraduate">Undergraduate</NavDropdown.Item>
              <NavDropdown.Item href="/master's">
                Master's
              </NavDropdown.Item>
              <NavDropdown.Item href="phd">PhD</NavDropdown.Item>
              <NavDropdown.Item href="programmes">Programmes</NavDropdown.Item>
              <NavDropdown.Item href="scholarships">Scholarships</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> */}
