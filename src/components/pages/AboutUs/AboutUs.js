import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboutUs from "../../../assets/images/aboutus.jpg";
import Gulnazik from "../../../assets/images/Gulnazik.jpg";
import Katie from "../../../assets/images/KatieProfilePic.jpg";
import Aibiike from "../../../assets/images/Aibiike1.jpg";
import Joe from "../../../assets/images/Joe1.jpg";
import Aidana from '../../../assets/images/Aidana.jpg';
import colorSharp from "../../../assets/img/color-sharp.png";
import styles from "./aboutus.module.css";

export const AboutUs = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={styles.about} id="abouts">
      <Container>
        <Row>
          <Col>
            <div className={styles.aboutBox}>
              <h2>OUR PEOPLE</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className={styles.aboutSlider}
              >
                <article className={styles.aboutSlider}>
                  <div className={styles.item}>
                    <img src={Gulnazik} alt="Image" />
                    <div className={styles.aboutInfo}>
                      <h5 className={styles.aboutTitle}>Gulnazik Bakhramova</h5>
                      <p className={styles.aboutTxt}>
                        Gulnazik is a Junior College student at the College of
                        San Mateo, California. She is from Kerben, Kyrgyzstan,
                        and was always determined to pursue a university degree
                        abroad. In Kyrgyzstan, Gulnazik was involved in various
                        projects and clubs led by Peace Corps volunteers in her
                        village. Gulnazik spent one academic year in the U.S.
                        High School, in Menlo Park, California, on Future
                        Leaders Exchange (FLEX) in 2019-2020. Studying abroad
                        inspired her to support youth in Kyrgyzstan in following
                        their academic goals and share her experience of being a
                        Kyrgyz student in the U.S.
                      </p>
                    </div>
                  </div>
                </article>

                <article className={styles.aboutSlider}>
                  <div className={styles.item}>
                    <img src={Katie} alt="Image" />
                    <div className={styles.aboutInfo}>
                      <h5 className={styles.aboutTitle}> Katie Delgado</h5>
                      <p className={styles.aboutTxt}>
                        Katie first met the founders of "Kel Chai Ich" while
                        volunteering in Peace Corp Kyrgyzstan from 2016-2018.
                        Katie has worked in 4 different countries as an English
                        Teacher to university and elementary students. Recently
                        she changed careers and has been working as a project
                        manager. Her work abroad and project management
                        experience has made her an invaluable addition to the
                        "Kel Chai Ich" team. Katie provides adminstrative
                        support and consults on curriculum development.
                      </p>
                    </div>
                  </div>
                </article>

                <article className={styles.sliderInfo}>
                  <div className={styles.item}>
                    <img src={Joe} alt="Image" />
                    <div className={styles.aboutInfo}>
                      <h5 className={styles.aboutTitle}>Joseph Mccleary</h5>
                      <p className={styles.aboutTxt}>
                        Joe worked in Kerben Kyrgyzstan as a Peace Corps
                        Volunteer before moving on to complete a Master's in
                        development studies from the Institute of Development
                        Studies at Sussex. He has also worked and volunteered in
                        Japan, Kazakhstan, and Thailand in a variety of roles.
                        He currently works in research and advocacy surrounding
                        education, vulnerability, migration, and houselessness.
                      </p>
                    </div>
                  </div>
                </article>

                <article className={styles.aboutSlider}>
                  <div className={styles.item}>
                    <img src={Aibiike} alt="Image" />
                    <div className={styles.info}>
                      <h5 className={styles.aboutTitle}>
                        Aibiike Abdysamatova
                      </h5>
                      <p className={styles.aboutTxt}>
                        Aibiike is a front-end developer and branch moderator at
                        an English language academy, is a true explorer at
                        heart. Her love for problem-solving and connecting the
                        dots has led her to embrace technology and programming,
                        using them as tools to bring her wildest ideas to life.
                        Her passion for STEM has inspired her to pursue a degree
                        in the field. Aibiike plays a crucial role in the "Kel
                        Chai Ich" project, handling all technical aspects with
                        her development skills. With an unwavering belief that
                        determined individuals can achieve remarkable feats, she
                        aims to demonstrate that one's origin should never limit
                        their potential.
                      </p>
                    </div>
                  </div>
                </article>

                <article className={styles.sliderAbout}>
                  <div className={styles.item}>
                    <img src={Aidana} alt="Image" />
                    <div className={styles.aboutInfo}>
                      <h5 className={styles.aboutTitle}>Aidana Rysbekova</h5>
                      <p className={styles.aboutTxt}>
                        Aidana is a student at San Mateo College. She
                        participated and volunteered in projects organized by
                        Peace Corps Volunteers. Living in the countryside made
                        it difficult to find information and mentors to help her
                        apply to study abroad. After graduating from high school
                        in Talas, she was able to enter an American college.
                        Through her own struggles, she aspires to support other
                        young women who believe that attending their dream
                        school is an unattainable goal.
                      </p>
                    </div>
                  </div>
                </article>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
