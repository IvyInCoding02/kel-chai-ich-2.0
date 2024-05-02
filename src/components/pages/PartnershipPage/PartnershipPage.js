import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import partnership from "../../../assets/images/partnership.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import styles from "./partnership.module.css";

function PartnershipPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_PARTNERSHIP_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_PARTNERSHIP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your email was successfully sent!")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      {/* <img  className={styles.bannerImg}  src="https://images.squarespace-cdn.com/content/v1/5c98cd8e65019f39682f36ba/1553518099491-71YZW58AKS0QHYIO7TAV/MAC+logo+final2.png?format=1500w"/> */}
      {/* <div className={styles.aboutBox}>
        <h2>"BE THE CHANGE YOU WANT TO SEE IN THE WORLD"</h2>
        <p>
          Kel Chai Ich is a comprehensive project designed to support students
          from Kyrgyzstan, particularly those from rural areas and young women,
          in their pursuit of higher education abroad.
        </p>
        <p>
          Kel Chai Ich is a multinational group comprising individuals with
          lived experience in seeking visas for education opportunities,
          supporting visa applications, and providing education in low-resource
          communities. With founding members from both Kyrgyzstan and the USA,
          the project can leverage existing relationships and resources
          developed through previous projects. This project is a natural
          evolution of existing efforts, aiming to scale the support provided to
          individual members of the group
        </p>
      </div> */}
      <div className={styles.contact} id="connect">
        <Container>
          <Row className={styles.alignItemsCenter}>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={partnership}
                    alt="Partnership"
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Let's cooperate!</h2>
                    <form ref={form} onSubmit={sendEmail}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            placeholder="Name"
                            name="user_name"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            placeholder="Last name"
                            name="last_name"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            placeholder="Email Address"
                            name="user_email"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            placeholder="Company"
                            name="user_company"
                            required
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            rows="6"
                            placeholder="Message"
                            name="message"
                            required
                          ></textarea>
                          <button type="submit"><span>Send</span></button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default PartnershipPage;
