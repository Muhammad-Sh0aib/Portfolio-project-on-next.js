import "../globals.scss";
import styles from "../Style/skill.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Skill = () => {
  useEffect(()=>{
    AOS.init({duration: "1500"})
  },[])
  return (
    <div className={styles.SkillSection} id="skill">

        <div className={styles.skillHeading}>
      <div className={"headingContent"}>
        <h2 className={"mainHeading"}>My Skills</h2>
        <h6 className={"subHeading"}>what i know</h6>
      </div>
      </div>


      <div className={styles.skilldetail}>
      <div className={styles.skillContainer}>
        <div className={styles.iconName}>
          <h6>HTML</h6>
        </div>
        <div className={styles.bar} data-aos="flip-right"></div>
      </div>


      <div className={styles.skillContainer}>
        <div className={styles.iconName}>
          <h6>CSS</h6>
        </div>
        <div className={styles.bar} data-aos="flip-right"></div>
      </div>

      <div className={styles.skillContainer}>
        <div className={styles.iconName}>
          <h6>Bootstrap</h6>
        </div>
        <div className={styles.bar} data-aos="flip-right"></div>
      </div>


      <div className={styles.skillContainer}>
        <div className={styles.iconName}>
          <h6>Javascript</h6>
        </div>
        <div className={styles.bar} data-aos="flip-right"></div>
      </div>


      <div className={styles.skillContainer}>
        <div className={styles.iconName}>
          <h6>React.js</h6>
        </div>
        <div className={styles.bar} data-aos="flip-right"></div>
      </div>



      <div className={styles.skillContainer}>
        <div className={styles.iconName}>
          <h6>Next.js</h6>
        </div>
        <div className={styles.bar} data-aos="flip-right"></div>
      </div>

      <div className={styles.skillContainer}>
        <div className={styles.iconName}>
          <h6>Ui/Ux (figma)</h6>
        </div>
        <div className={styles.bar} data-aos="flip-right"></div>
      </div>


      <div className={styles.skillContainer}>
        <div className={styles.iconName}>
          <h6>Adobe Illustrator</h6>
        </div>
        <div className={styles.bar} data-aos="flip-right"></div>
      </div>

      <div className={styles.skillContainer}>
        <div className={styles.iconName}>
          <h6>Adobe Photoshop</h6>
        </div>
        <div className={styles.bar} data-aos="flip-right"></div>
      </div>


      </div>

    </div>
  );
};

export default Skill;
