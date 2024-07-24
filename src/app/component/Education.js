import styles from "../Style/education.module.scss";
import { useState,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  const [edu, setEdu] = useState("addEdu");
  const [cer, setCer] = useState("removeCer");
  const [eduBtnActive, seteduBtnActive] = useState("eduBtnActive");
  const [cerBtnActive, setcerBtnActive] = useState("");

  function eduFun() {
    setCer("removeCer");
    setEdu("addEdu");
    seteduBtnActive("eduBtnActive");
    setcerBtnActive("");
  }

  function CerFun() {
    setCer("addCer");
    setEdu("removeEdu");
    setcerBtnActive("cerBtnActive");
    seteduBtnActive("");
  }

  useEffect(()=>{
    AOS.init({duration: "1500"})
  },[])

  return (
    <div className={styles.EducationSection} id="Education">
      <div className={styles.btnContainer}>
        <button onClick={eduFun} className={`${styles.eduBtn} ${eduBtnActive}`}>
          My Educations
        </button>
        <button onClick={CerFun} className={`${styles.eduBtn} ${cerBtnActive}`}>
          My Certificates
        </button>
      </div>

      <div className={styles.sperator}></div>
      <div className={styles.circles}>
        <div className={styles.cir}></div>
        <div className={styles.cir}></div>
        <div className={styles.cir}></div>
      </div>

      <div className={`${edu}`}>
        <div className={styles.MainContainer}>
          <div className={styles.dateContainer}>
            <div className={styles.date} data-aos="fade-left"><p>Sep 2020 - June 2024</p></div>
            <div className={styles.date} data-aos="fade-left"><p>Sep 2017 - June 2019</p></div>
            <div className={styles.date} data-aos="fade-left"><p>April 2015 - May 2017</p></div>
          </div>
          <div className={styles.detailContainer}>
            <div className={styles.Detail} data-aos="fade-right">
              <h4>Bechlore BSSE</h4>
              <h6>Software Engineering</h6>
              <p>From Sindh Madersatul Islam University</p>
            </div>
            <div className={styles.Detail} data-aos="fade-right">
              <h4>Intermediate</h4>
              <h6>Pre-Engineering</h6>
              <p>From Sindh Muslim Government Science College</p>
            </div>
            <div className={styles.Detail} data-aos="fade-right">
              <h4>Matriculation</h4>
              <h6>Science</h6>
              <p>From Karachi Secondary Education</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${cer}`}>
      <div className={styles.MainContainer}>
          <div className={styles.dateContainer}>
            <div className={styles.date} data-aos="fade-left"><p>June 2022 - Dec 2023</p></div>
            <div className={styles.date} data-aos="fade-left"><p>Dec 2022 - Dec 2023</p></div>
            <div className={styles.date} data-aos="fade-left"><p>May 2021 - Aug 2021</p></div>
          </div>
          <div className={styles.detailContainer}>
            <div className={styles.Detail} data-aos="fade-right">
              <h4>Cloud Computing</h4>
              <p>From Piaic</p>
            </div>
            <div className={styles.Detail} data-aos="fade-right">
              <h4>Web & App Development</h4>
              <p>From Saylani Mass IT Traning</p>
            </div>
            <div className={styles.Detail} data-aos="fade-right">
              <h4>Graphic Design</h4>
              <p>From Click 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
