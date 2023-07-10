import React from "react";
// import Image from "next/image";
import styles from "../Style/project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <div className={styles.projectSection} id="project">
      <div className={"headingContent"}>
        <h2 className={"mainHeading"}>My Projects</h2>
        <h6 className={"subHeading"}>my workings</h6>
      </div>

      <div className={styles.CardsContainer}>


      
        <div className={styles.proCard}>

          <a
              href="https://muhammad-sh0aib.github.io/Budget_web/"
              target="_blank"
              rel="noopener noreferrer"
            >
          <h2>Budget App</h2>
          <div className={styles.iconCricle}>
            <FontAwesomeIcon className={styles.codeIcon} icon={faCode} />
          </div>
          <p>Budget calculator app using Html Css and JavaScript</p>


          </a>

          <div className={styles.cardBtn}>
            <a
              href="https://github.com/Muhammad-Sh0aib/Budget_web.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.btn}>
                <h6>Source Code</h6>
              </div>
            </a>

            <a
              href="https://muhammad-sh0aib.github.io/Budget_web/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.btn}>
                <h6>Live Project</h6>
              </div>
            </a>


          </div>
          
        </div>

        


      </div>
    </div>
  );
};

export default Project;
