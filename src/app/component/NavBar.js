import styles from '../Style/nav.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [activeNav, setactiveNav] = useState("");
  const [navList, setnavList] = useState("");
  const [navMark, setnavMark] = useState("");
  const [closeMark, setcloseMark] = useState("");

  function navFun() {
    setactiveNav("activeNav");
    setnavList("navList");
    setnavMark("navMark");
    setcloseMark("closeMark");
  }

  function closeNav() {
    setactiveNav("");
    setnavList("");
    setnavMark("");
    setcloseMark("");
  }



  return (
    
    <div className={`${styles.NavBar}  ${activeNav}`}>

    

      <div className={styles.logo_navIcon}>

        <div className={styles.logo}>
          <div className={styles.logo_circle}></div>
          <a href="#home" onClick={closeNav}>
          <h2>Muhammad Shoaib</h2>
          </a>
        </div>

        <FontAwesomeIcon onClick={navFun} icon={faBars} className={`${styles.navIcon} ${navMark}`} />
        <FontAwesomeIcon onClick={closeNav} icon={faXmark} className={`${styles.closeIcon} ${closeMark}`} />

      </div>

      <div className={`${styles.listFalse} ${navList}`}>



        <div className={`${styles.list}`}>
          <ul>
            <a href="#home" className={styles.Link}> <li onClick={closeNav}  >Home</li> </a>
            <a href="#about"  className={styles.Link}> <li onClick={closeNav} >About</li> </a>
            <a href="#skill" className={styles.Link}> <li onClick={closeNav} >Skill</li> </a>
            <a href="#experience" className={styles.Link}> <li onClick={closeNav} >Experience</li> </a>
            <a href="#Education" className={styles.Link}> <li onClick={closeNav} >Education</li> </a>
            <a href="#project" className={styles.Link}> <li onClick={closeNav} >Project</li> </a>
            <a href="#Contact"  className={styles.Link}> <li onClick={closeNav} >Contact</li> </a>


          </ul>
        </div>

   

      </div>

    </div>
  )
}

export default NavBar
