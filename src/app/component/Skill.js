import Image from "next/image";
import "../globals.scss";
import styles from "../Style/skill.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: "1500" })
  }, [])
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
            <Image
              className={styles.icon}
              src="/html.png"
              width={24}
              height={24}
              alt="img here"
            />
            <h6>HTML</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>


        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/css.png"
              width={24}
              height={24}
              alt="img here"
            />
            <h6>CSS</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>

        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/bootstrap.png"
              width={24}
              height={22}
              alt="img here"
            />
            <h6>Bootstrap</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>

        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/tailwind.png"
              width={24}
              height={20}
              alt="img here"
            />
            <h6>Tailwind CSS</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>

        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/js.png"
              width={24}
              height={24}
              alt="img here"
            />
            <h6>Javascript</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>


        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/react1.png"
              width={24}
              height={22}
              alt="img here"
            />
            <h6>React.js</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>


        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/next.png"
              width={24}
              height={24}
              alt="img here"
            />
            <h6>Next.js</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>

        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/wordpress.png"
              width={24}
              height={24}
              alt="img here"
            />
            <h6>WordPress</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>

        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/php.png"
              width={24}
              height={24}
              alt="img here"
            />
            <h6>Php</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>

        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/figma.png"
              width={24}
              height={22}
              alt="img here"
            />
            <h6>Ui/Ux (figma)</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>


        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/ai.png"
              width={24}
              height={24}
              alt="img here"
            />
            <h6>Adobe Illustrator</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>

        <div className={styles.skillContainer}>
          <div className={styles.iconName}>
            <Image
              className={styles.icon}
              src="/ps.png"
              width={24}
              height={24}
              alt="img here"
            />
            <h6>Adobe Photoshop</h6>
          </div>
          <div className={styles.bar} data-aos="flip-right"></div>
        </div>


      </div>

    </div>
  );
};

export default Skill;
