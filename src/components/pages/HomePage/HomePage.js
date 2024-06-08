import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import vision1 from '../../../assets/images/2.png';
import vision2 from '../../../assets/images/3.png';
import vision3 from '../../../assets/images/5.png';
import mission1 from '../../../assets/images/6.png';
import mission2 from '../../../assets/images/7.png';
import land from '../../../assets/images/1.png';


export default function HomePage() {
  return (
    <section>
        {/* <Container> */}
        <div style={{margin:"50px"}}>
            <Row className="align-items-center" style={{margin:"40px", background: "grey"}}>
                <Col style={{padding:"30px"}} >
                <h1>KEL CHAI ICH - LAND OF OPPORTUNITIES...</h1>
                <p>
                Kel Chai Ich is nonprofit foundation that focuses on assisting
                students from Kyrgyzstan, particularly those from rural areas
                and young women, in their pursuit of higher education in United
                States.
                </p>
                </Col>
                <Col>
                <img style={{marginleft:"205px"}} src={land} alt=""/>
                </Col>
            </Row>
            <div>
            <h1 style={{marginLeft:"500px", padding:"40px"}}>OUR VISION</h1>
            <Row className="align-items-center" style={{margin:"40px", background: "grey"}}>
                <Col>
                <img style={{marginLeft:"50px"}} src={vision1} alt=""/>
                <p style={{width:"350px", textAlign:"center"}}>
                Guide perspective girls from regions of Kyrgyzstan and fully
                assist with the application process through mentorship and peer
                support.
              </p>
                </Col>
                <Col>
                <img style={{marginLeft:"50px"}} src={vision2} alt=""/>
                <p style={{width:"350px", textAlign:"center"}}>
                Get all participants accepted to universities abroad with the
                opportunity to qualify for needed scholarships and funding.
              </p>
                </Col>
                <Col>
                <img style={{marginLeft:"50px"}} src={vision3} alt=""/>
                <p style={{width:"350px", textAlign:"center"}}>
                Establish a nation of educated girls investing and supporting
                the younger generation of the program to pursue education at
                their dream universities and countries.
              </p>
                </Col>
            </Row>
            </div>
            <div>
            <h1 style={{marginLeft:"500px", padding:"40px"}}>OUR MISSION</h1>
            <Row className="align-items-center" style={{alignItems:"center", margin:"40px", background: "grey"}}>
                <Col>
                <img style={{marginLeft:"100px"}} src={mission1} alt=""/>
                <p style={{width:"350px",textAlign:"center"}}>
                Support students from Kyrgyzstan, particularly those from rural areas
                and young women, in their pursuit of higher education abroad.
                </p>
                </Col>
                <Col>
                <img style={{marginLeft:"65px"}} src={mission2} alt=""/>
                <p style={{width:"350px", textAlign:"center"}}>
                Provide students with the necessary
                resources, mentorship, and guidance to navigate the application
                and enrollment process for universities outside of Kyrgyzstan.
                </p>
                </Col>
            </Row>
            </div>
            </div>
        {/* </Container> */}
    </section>
  )
}
