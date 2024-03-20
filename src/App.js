import React from 'react';
import './App.css';
import Header from './components/header/Headerjs.jsx';
import Home from './components/home/Homejs';
import Aboutjs from './components/about/aboutjs.jsx';
import Skills from './components/skills/Skillsjs.jsx';
// import Servicesjs from './components/services/Servicesjs.jsx';
import Qualification from './components/qualification/Qualificationjs.jsx';
import Contact from './components/contact/Contactjs.jsx';
import Footer from './components/footer/Footerjs.jsx';
import ScrollUp from './components/scrollup/ScrollUpjs.jsx';

function App() {
  return (
  <>
  <Header />
  <main className='main'>
    <Home />
    <Aboutjs />
    <Skills />
    {/* <Servicesjs /> */}
    <Qualification />
    <Contact />
    </main>
    <Footer />
    <ScrollUp />
  </>
  );
}

export default App;
