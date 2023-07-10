import Image from "next/image";
import styles from "../Style/home.module.scss";

const Home = () => {
  return (
    <div className={styles.HomeSection} id="home">

      <div className={styles.Container}>

        <div className={styles.imgContainer}>
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
          <h6>Frontend Developer</h6>

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
