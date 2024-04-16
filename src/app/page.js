'use client'
import NavBar from './component/NavBar';
import HomeComp from './component/Home';
import About from './component/About';
import Skill from './component/Skill';
import Education from './component/Education';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './component/Experience';


export default function Home() {
  return (
    <>
      <NavBar/>
      <HomeComp/>
      <About/>
      <Skill/>
      <Experience/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}
