import { Container, Row, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/images/background2.jpg';
import { useEffect, useState } from "react";
import contactUs, { ContactUs } from "./pages/contactUs/ContactUs";
import { Footer } from "./Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Universities','Scholarships', 'Education'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; 

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);   
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
      <section>
        <div className="banner" id="home">
        <Container>
          <Row className="align-items">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to Kel Chai Ich</span>
              <h1>
                {"Hi, your journey starts here. "}
                <span className="wrap">{text}</span>
              </h1>
              {/* <p id="headparagrapgh">
                Kel Chai Ich is nonprofit foundation that focuses on assisting
                students from Kyrgyzstan, particularly those from rural areas
                and young women, in their pursuit of higher education in United
                States.
              </p> */}
              {/* <button onClick={() => console.log("connect")}>
                Let's connect <ArrowRightCircle size={25} />
              </button> */}
              <Nav.Link href="/partnership">
                <button className="vvd">
                  {/* <span>Let's Connect</span> */}
                </button>
              </Nav.Link>
            </Col>
            <Col xs={12} md={6} xl={5}>
              {/* <img src={headerImg} alt="HeaderImg"/> */}
            </Col>
          </Row>
        </Container>
        </div>
        <HomePage/>
      </section>
      
    );
}


//  Our goal is providing with the necessary resources,
// mentorship to successfully navigate the application and
// enrollment process at international universities.This group
// comprises founding members from both Kyrgyzstan and the USA,
// which enables them to leverage existing relationships and
// resources that helps the application process easy