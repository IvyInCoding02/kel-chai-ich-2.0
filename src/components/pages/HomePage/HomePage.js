import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import vision1 from '../../../assets/images/2.png';
import vision2 from '../../../assets/images/3.png';
import vision3 from '../../../assets/images/5.png';
import mission1 from '../../../assets/images/6.png';
import mission2 from '../../../assets/images/7.png';
import land from '../../../assets/images/1.png';
import styles from './homepage.module.css';


export default function HomePage() {
  return (
    <section>
        <div className={styles.container}>
            <Row className="align-items-center" >
            <Col>
                <img className={styles.firstBoxImage} src={land} alt=""/>
                </Col>
                <Col>
                <h1 className={styles.firstBoxHeader}>KEL CHAI ICH - LAND OF OPPORTUNITIES...</h1>
                <p className={styles.firstBoxDescr}>
                Kel Chai Ich is nonprofit foundation that focuses on assisting
                students from Kyrgyzstan, particularly those from rural areas
                and young women, in their pursuit of higher education in United
                States.
                </p>
                </Col>
            </Row>
            <div>
            <h1 className={styles.secondBoxHeader}>OUR VISION</h1>
            <Row className="align-items-center">
                <Col>
                <img  className={styles.secondBoxImg} src={vision1} alt=""/>
                <p className={styles.secondBoxDescr}>
                Guide perspective girls from regions of Kyrgyzstan and fully
                assist with the application process through mentorship and peer
                support.
              </p>
                </Col>
                <Col>
                <img className={styles.secondBoxImg} src={vision2} alt=""/>
                <p className={styles.secondBoxDescr}>
                Get all participants accepted to universities abroad with the
                opportunity to qualify for needed scholarships and funding.
              </p>
                </Col>
                <Col>
                <img className={styles.secondBoxImg} src={vision3} alt=""/>
                <p className={styles.secondBoxDescr}>
                Establish a nation of educated girls investing and supporting
                the younger generation of the program to pursue education at
                their dream universities and countries.
              </p>
                </Col>
            </Row>
            </div>
            <div>
            <h1 className={styles.thirdBoxHeader}>OUR MISSION</h1>
            <Row className={styles.thirdBoxRow}>
              <img className={styles.thirdBoxImg} src={mission1} alt=""/>
              <p className={styles.thirdBoxDescr}>
                Support students from Kyrgyzstan, particularly those from rural areas
                and young women, in their pursuit of higher education abroad.
                </p>
                </Row>
                <Row className={styles.thirdBoxRow2}>
                <p className={styles.thirdBoxDescr2}>
                Provide students with the necessary
                resources, mentorship, and guidance to navigate the application
                and enrollment process for universities outside of Kyrgyzstan.
                </p>
                <img className={styles.thirdBoxImg2} src={mission2} alt=""/>
            </Row>
            </div>
            </div>
    </section>
  )
}
