import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactUs from '../../../assets/images/contactUs.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import styles from './contactus.module.css';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_CONTACTUS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_CONTACTUS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
 
  return (
    <section className={styles.contact} id="connect">
      <Container>
        <Row className={styles.alignItemsCenter}>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactUs} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Name" name="user_name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last name" name="last_name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name="user_email"required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Subject" name="subject" required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" name="message" required></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

