import Image from "next/image";
import styles from "../Style/about.module.scss";

const About = () => {

  return (
    <>
    <div className={styles.aboutSection} id="about">
      <div className={styles.TopHeading}>
        <div className={"headingContent"}>
          <h2 className={"mainHeading"}>About Me</h2>
          <h6 className={"subHeading"}>who i am</h6>
        </div>
      </div>

      <div className={styles.aboutSuper}>
        <div className={styles.aboutImg}>
          <Image
            className={styles.img}
            src="/bg2.png"
            width={400}
            height={350}
            alt="Picture of the author"
          />
        </div>

        <div className={styles.aboutContent}>

          <h4>I'm Muhammad Shoaib, Frontend Developer</h4>
          <p>
            I am doing Bachelors in Software Engineering from Sindh Madressatul
            Islam University. I have been working on JavaScript libraries and
            framework and eager to learn and excited to gain hands-on experience
            in the field. I enjoy learning new programming languages and
            experimenting with different projects. I am a hardworking and
            dedicated individual who is determined to succeed in the world of
            software development. I am skilled in Html, CSS, Bootstrap,
            JavaScript, React.js and Next.js. I am always looking for
            opportunities to grow and improve my skills.
          </p>

          <a href="./CV.pdf" download>
          <button className={"btn"}>
              Download CV
          </button>
          </a>
        </div>
      </div>

      
    </div>

</>
  );
};

export default About;
