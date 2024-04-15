import styles from "../Style/project.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: "1500" })
  }, [])
  return (
    <div className={styles.projectSection} id="project">
      <div className={"headingContent"}>
        <h2 className={"mainHeading"}>My Projects</h2>
        <h6 className={"subHeading"}>my workings</h6>
      </div>


      <div className={styles.CardsContainer}>

        {/* Travel Website card */}
        <div className={styles.proCard} data-aos="zoom-in-up">
          <a
            href="https://travel-website-snowy-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Travel Website</h2>
            <div className={styles.imgCont}>
              <img className={styles.img}
                src="/goTour.png" />
            </div>
            <p>A responsive React.js project for immersive travel trip planning.</p>
          </a>
          <div className={styles.cardBtn}>
            <a
              href="https://travel-website-snowy-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.viewBtn}>
                <h6>View</h6>
                <MdOutlineRemoveRedEye className={styles.Btnicon}/>
              </div>
            </a>
            <a
              href="https://github.com/Muhammad-Sh0aib/Travel-website.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.gitBtn}>
                <FaGithub className={styles.Btnicon}/>
                <h6>Code</h6>
                <GrLinkNext className={styles.Btnicon}/>
              </div>
            </a>
          </div>
        </div>

        {/* Weather app card */}
        <div className={styles.proCard} data-aos="zoom-in-up">
          <a
            href="https://weather-app-sigma-lilac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Weather App</h2>
            <div className={styles.imgCont}>
              <img className={styles.img}
                src="/weather.png" />
            </div>
            <p>React.js weather app fetching live weather details from an API.</p>
          </a>
          <div className={styles.cardBtn}>
            <a
              href="https://weather-app-sigma-lilac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.viewBtn}>
                <h6>View</h6>
                <MdOutlineRemoveRedEye className={styles.Btnicon}/>
              </div>
            </a>
            <a
              href="https://github.com/Muhammad-Sh0aib/Weather_app.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.gitBtn}>
                <FaGithub className={styles.Btnicon}/>
                <h6>Code</h6>
                <GrLinkNext className={styles.Btnicon}/>
              </div>
            </a>
          </div>
        </div>

        {/* Budget app card */}
        <div className={styles.proCard} data-aos="zoom-in-up">
          <a
            href="https://muhammad-sh0aib.github.io/Budget_web/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Budget App</h2>
            <div className={styles.imgCont}>
              <img className={styles.img}
                src="/budget.png" />
            </div>
            <p>Budget calculator app using Html Css and JavaScript</p>
          </a>
          <div className={styles.cardBtn}>
            <a
              href="https://muhammad-sh0aib.github.io/Budget_web/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.viewBtn}>
                <h6>View</h6>
                <MdOutlineRemoveRedEye className={styles.Btnicon}/>
              </div>
            </a>
            <a
              href="https://github.com/Muhammad-Sh0aib/Budget_web.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.gitBtn}>
                <FaGithub className={styles.Btnicon}/>
                <h6>Code</h6>
                <GrLinkNext className={styles.Btnicon}/>
              </div>
            </a>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Project;
