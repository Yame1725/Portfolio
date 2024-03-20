import React, { useState } from 'react';
import './services.css';

const Servicesjs = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index); 
    }

  return (
    <section className="services section" id="services"> 
       <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Deliver</span>

        <div className="services__container container grid">
                <div className="services__content">

                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product <br/> Designer</h3>     

                    <span className="services__button" onClick={() => toggleTab(1)}>
                    View More <i className="uil uil-arrow-right services__button"></i></span>

                <div className={toggleState === 1? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Product <br/> Designer</h3>
                        <p className="services__modal-description">Services with One year of experience</p>

                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the UI</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web Page Development</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create UX element interaction</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">ABC</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">ABC</p>
                            </li>

                        </ul>

                    </div>
                </div>
                </div> 
                <div className="services__content">
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Java <br/> Developer</h3>     
                <span onClick={() => toggleTab(2)} className="services__button" >View More{" "}<i className="uil uil-arrow-right services__button"></i></span>

                <div className={toggleState === 2? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Java <br/> Developer</h3>
                        <p className="services__modal-description">Services with One year of experience</p>

                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the UI</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web Page Development</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create UX element interaction</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">ABC</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">ABC</p>
                            </li>

                        </ul>

                    </div>
                </div>
                </div> 
                <div className="services__content">
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">. Net <br/> Developer</h3>     
                <span onClick={() => toggleTab(3)} className="services__button">View More{" "} <i className="uil uil-arrow-right services__button"></i></span>

                <div className={toggleState === 3? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">. Net<br/> Developer</h3>
                        <p className="services__modal-description">Services with One year of experience</p>

                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the UI</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web Page Development</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create UX element interaction</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">ABC</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">ABC</p>
                            </li>

                        </ul>

                    </div>
                </div>
                </div>
        </div> 
    </section>
  )
}

export default Servicesjs