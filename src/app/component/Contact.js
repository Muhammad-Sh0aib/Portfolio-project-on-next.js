import React from "react";
import styles from "../Style/contact.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className={styles.ContactSection} id="Contact">
      <div className={styles.mainHeading}>
      <div className={"headingContent"}>
        <h2 className={"mainHeading"}>Contact ME</h2>
        <h6 className={"subHeading"}>get in touch</h6>
      </div>
      </div>

      <div className={styles.conTxt}>
        <p>If you are looking for the Frontend Developer then reach out me.
        You can contact me on any of the given contact details OR
        </p>
        <p className={styles.CVBtn}>
          {" "}
          <a href="./CV.pdf" download>
            DOWNLOAD CV.
          </a>
        </p>
      </div>

      <div className={styles.ConCardsContainer}>

        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.contIcon} />
          </div>
          <h4>Email</h4>
          <p>
            {" "}
            <a href="mailto:shoaibbabar098@gmail.com">
              shoaibbabar098@gmail.com
            </a>
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <FontAwesomeIcon
              icon={faMobileScreen}
              className={styles.contIcon}
            />
          </div>
          <h4>Phone</h4>
          <p>
            {" "}
            <a href="tel:03151080450">0315-1080450</a>
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.contIcon} />
          </div>
          <h4>Address</h4>
          <p> E#1182 Haryana Colony, Orangi Town, Karachi</p>
        </div>
      </div>

      <div className={styles.socailContainer}>
        <a href="https://www.linkedin.com/in/muhammad-shoaib-464412247">
      <Image
          className={styles.SocialImg}
          src="/linkedin.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        </a>
        <a href="https://github.com/Muhammad-Sh0aib">
        <Image
          className={styles.SocialImg}
          src="/git.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        </a>
      </div>
    </div>
  );
};

export default Contact;
