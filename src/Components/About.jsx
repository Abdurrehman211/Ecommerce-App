import React from "react";
import './About.css';
import team from './Images/Team.png';
import rectangle from './Images/Rectangle1.svg';
import rectangle2 from './Images/Rectangle2.svg';
import rectangle3 from './Images/Rectangle3.svg';
import rectangle4 from './Images/Rectangle4.png';
import Suit from './Images/suit.png';
import Free from './Images/Formal.png';
import ElfSightEmbed from "./ElfSightEmbed";
function About(){
    return(
        <>
        <section id="About">
            <div className="container">
                <div className="row About-row" >
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1 className="About-title">About StyleWear</h1>
                    </div>
                </div>
            </div>
        </section>
        <section id="About-team">
            <div className="container">
                <div className="row" id="About-row">
                    <div className=" col-lg-5 col-md-5 col-sm-12" id="About-col">
                      <img src={Free} alt="pic" id="Free"/>
                        <button className="btn btn-light btn-outline-primary btn-lg  p-3">Buy now</button>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12" id="About-col">
                    <img src={Suit} alt="pic" id="Free"/>
                    <button className="btn btn-light btn-outline-primary btn-lg  p-3">Buy now</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="team">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                    <h1 className="text-uppercase" style={{fontSize:'50px',fontWeight:'800'}}>The founder</h1>
                </div>
            <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mt-5">
                                <img src={rectangle} id="Rect" alt="Rectangle" />
                                <div className="card-body" id="cb">
                                    <p>Alex Hales</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card  mt-5" >
                                <img src={rectangle2} id="Rect" alt="Rectangle" />

                                <div className="card-body" id="cb">
                                    <p>Mani</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card  mt-5">
                                <img src={rectangle3} id="Rect" alt="Rectangle" />

                                <div className="card-body" id="cb">
                                    <p>Jane Doe</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card  mt-5">
                                <img src={rectangle4} id="Rect" alt="Rectangle" />
                                <div className="card-body" id="cb">
                                    <p>Norma </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        <section id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                    <ElfSightEmbed/>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}
export default About;