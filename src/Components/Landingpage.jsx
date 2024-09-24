import React from "react";
// import "aos/dist/aos.css";
import { useEffect } from "react";
import Lady from './Images/Hero-image.png.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import Search from './Images/Search.png';
import { useNavigate } from "react-router-dom";
import mock from './Images/mock-pic1.jpg';
import mock2 from './Images/mock-pic2.jpg';
import mock3 from './Images/Mock3.jpg';
import mock4 from './Images/mock4.jpg';
import mock5 from './Images/mock5.jpg';
import mock6 from './Images/mock6.jpg';
import Benefit from './Images/Benefit.png';
import rectangle from './Images/Rectangle1.svg';
import rectangle2 from './Images/Rectangle2.svg';
import rectangle3 from './Images/Rectangle3.svg';
import rectangle4 from './Images/Rectangle4.png';
function Landingpage() {
    const navigate = useNavigate();
    const HandleMovement = () => {
        let x = document.getElementById("gsearch").value;
        // console.log(x);
        window.location.href = `/${x}`
    }
    const Goto = () => {
        navigate('/products');
    }
    return (
        <>
            <section id="Hero" className="bg-fullscreen" >
                <div className="container">
                    <div className="row">
                        <div className="col1 col-lg-6 col-md-6 col-sm-12">
                            <div className="Text">
                                <h1 className="hero-title">Welcome to World of <br /> <span style={{ color: 'cornflowerblue' }}>Fashion</span></h1>
                                <p>Dive into the world of Fashion where you get all your thing from one place</p>
                                <div className="txt-search">
                                    <div className="txt-button">
                                        <button className="btn btn-primary btn-lg" onClick={Goto}>Shop Now</button>
                                    </div>

                                    <div className="txt-Search">
                                        <input type="search" id="gsearch" name="gsearch" placeholder="Search" />
                                        <button onClick={HandleMovement}><img src={Search} alt="Search" id="Search" /></button>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12"  >
                            <img src={Lady} alt="Lady Pic" id="Lady" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container" >
                    <div className="row" id="">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="m-5" style={{ textAlign: 'center',fontWeight: 'bolder',fontSize: '50px' }}>Featured Products</h1>
                            <p className="mb-3 " style={{fontSize:'30px', textAlign: 'center'}}>New arrivals</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img src={mock} class="card-img-top" alt="Very Good" id="img" />
                                <a href="/product">Shop now</a>
                                <div class="card-body">
                                    <p>White Shirt</p>
                                    <strong style={{ color: 'skyblue' }}>$49.99</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img src={mock2} class="card-img-top" alt="Very Good" id="img" />
                                <a href="/product">Shop now</a>
                                <div class="card-body">
                                    <p>Blue casual Shirt</p>
                                    <strong style={{ color: 'skyblue' }}>$39.99</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img src={mock3} class="card-img-top" alt="Very Good" id="img" />
                                <a href="/product">Shop now</a>
                                <div class="card-body">
                                    <p>Navy blue Shirt</p>
                                    <strong style={{ color: 'skyblue' }}>$20</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img src={mock5} class="card-img-top" alt="Very Good" id="img" />
                                <a href="/product">Shop now</a>
                                <div class="card-body">
                                    <p>Green Kurta Shalwar</p>
                                    <strong style={{ color: 'skyblue' }}>$46</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img src={mock4} class="card-img-top" alt="Very Good" id="img" />
                                <a href="/product">Shop now</a>
                                <div class="card-body">
                                    <p>plain White Shirt</p>
                                    <strong style={{ color: 'skyblue' }}>$40</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img src={mock6} class="card-img-top" alt="Very Good" id="img" />
                                <a href="/product">Shop now</a>
                                <div class="card-body">
                                    <p>Formal Shirts off-white </p>
                                    <strong style={{ color: 'skyblue' }}>$9.99</strong>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                           
                        </div>
                    </div> */}
                </div>
            </section>
            <img src={Benefit} alt="Banner" id="Banner" />
            <section id="Advertisement">
                <div className="container">
                    <div className="row" id="Ad-row">
                        <div className="col-22 col-lg-7 col-md-6 col-sm-12">
                            <h2 className="h1 m-4" >Peace Of Mind</h2>
                            <p id="P">A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.</p>
                            <button className="btn btn-light btn-outline-primary mt-4">Shop Now</button>
                        </div>
                        <div className="col-22 col-lg-4 col-md-5 col-sm-12">
                            <h2 className="h1 m-4">Buy 2 Get 1 Free</h2>
                            <p id="P1">End of season sale. Buy any 2 items of your choice and get 1 free.</p>
                            <button className="btn btn-light btn-outline-primary mt-4">Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Seller">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="H1">Our best Seller</h1>
                        </div>
                    </div>
                    <div className="row " >
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mt-5">
                                <img src={rectangle} id="Rect" alt="Rectangle" />
                                <div className="card-body" id="cb">
                                    <p>Formal Shirt  </p>
                                    <strong style={{ color: 'skyblue' }}>$9.99</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card  mt-5" >
                                <img src={rectangle2} id="Rect" alt="Rectangle" />

                                <div className="card-body" id="cb">
                                    <p>Grey polo shirt </p>
                                    <strong style={{ color: 'skyblue' }}>$9.99</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card  mt-5">
                                <img src={rectangle3} id="Rect" alt="Rectangle" />

                                <div className="card-body" id="cb">
                                    <p>Red Shirt </p>
                                    <strong style={{ color: 'skyblue' }}>$9.99</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card  mt-5">
                                <img src={rectangle4} id="Rect" alt="Rectangle" />
                                <div className="card-body" id="cb">
                                    <p>Pink casual Shirt</p>
                                    <strong style={{ color: 'skyblue' }}>$9.99</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-danger btn-outline-warning m-5 ">Shop Now</button>
                </div>
            </section>
        </>
    )
}

export default Landingpage;