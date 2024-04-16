import Image from "next/image";
import styles from "../Style/home.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" })
  }, [])
  return (
    <div className={styles.HomeSection} id="home">

      <div className={styles.Container}>

        <div className={styles.imgContainer} data-aos="fade-left">
          <div className={styles.imgBack}></div>
          <Image
            className={styles.img}
            src="/bg1.png"
            width={350}
            height={350}
            alt="Picture of the author"
          />

        </div>

        <div className={styles.content}>
          <h6>Hi, I'm</h6>
          <h2>Muhammad Shoaib</h2>
          {/* <h6>Frontend Developer</h6> */}

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Fronten Developer',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Web Developer',
              1000,
              'Web Designer',
              1000,
              'Ui/Ux Designer',
              1000
            ]}
            wrapper="h6"
            speed={50}
            // style={{ fontSize: '2em', display: 'inline' }}
            repeat={Infinity}
          />



          <div className="mt-4">

            <div className={styles.socailContainer}>
              <a href="https://www.linkedin.com/in/muhammad-shoaib-464412247">
                <Image
                  className={styles.SocialImg}
                  src="/linkedin.png"
                  width={38}
                  height={38}
                  alt="Picture of the author"
                />
              </a>
              <a href="https://github.com/Muhammad-Sh0aib">
                <Image
                  className={styles.SocialImg}
                  src="/git.png"
                  width={38}
                  height={38}
                  alt="Picture of the author"
                />
              </a>
            </div>

            <a href="./CV.pdf" download>
              <button className={"btn"}>Download CV</button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
