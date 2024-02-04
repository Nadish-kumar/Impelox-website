import React from "react";
import "../Home/Home.css";
import logo from "../../asset/impelox.svg";
import Ai from "../../asset/ai3.svg";
// import line from "../../asset/line.svg"
import land from "../../asset/window.png";
import data from "../../asset/data.svg";
import natural from "../../asset/natural.svg";
import vision from "../../asset/vision.svg";
import boat from "../../asset/boat.svg";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import boatpart from "../../asset/boat2.svg";
import { useState } from "react";

const Home = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="container-fluid bg_home_color">
        <div className="container-fluid header_common_color_home">
          <div className="container">
            <div className="company_header">
              <div className="company_header_left">
                <img className="company_logo" src={logo} alt="logo"/>
              </div>
              <div className="company_header_right">
                <ul className="option_body">
                  <Link className="menu-link" to="/">
                    <li className="menu_home">Home</li>
                  </Link>
                  <Link className="menu-link" to="/career">
                    <li className="menu_home">Careers</li>
                  </Link>
                  <Link className="menu-link" to="/company">
                    <li className="menu_home">Company</li>
                  </Link>
                  <Link className="menu-link" to="/contact">
                    <li className="menu_home">Contact Us</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="container p-0">
      <nav class="navbar navbar-expand-lg m-0 p-0">
        <div class="container-fluid">
        <img className='logo' src={logo} alt='logo' />
          <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>
       
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav text-center mt-2">
              <Link className='menu-link' to='/'><li className='option'>Home</li></Link>
              <Link className='menu-link' to='/career'><li className='options'>Careers</li></Link>
              <Link className='menu-link' to='/company'><li className='options'>Company</li></Link>
              <a className='menu-link' href='#footer'><li className='options'>Contact Us</li></a>
                
           
            </ul>
          </div>
        </div>
      
      </nav>
    </div> */}

        <div className="container">
          <div className="home_body">
            <div className="left_body">
              <p className="main_text">
                Decisions are
                <br /> made simple
              </p>
              <p className="sub_text">
                with an excellent Artificial Intelligence
                <br /> narrative of the data
              </p>
            </div>
            <div className="right_body">
              <img className="ai_pic" src={Ai} alt="AI" />
            </div>
          </div>
        </div>
      </div>
      <div className="home_mission">
        <p className="mission_name">Our Mission</p>
        <p className="mission_subheading">
          Decision making <br />
          Intelligent platform
        </p>
        <p className="mission_substring">We build interactive decision assistant system that applies contextual intelligence & analytics across domains such as HR tech, edutech, healthcare & e-commerce using Image, Video, Audio, Textual data, Location etc. as sources of data.</p>
      </div>
      <div className="container">
        <div className="product">
          <p className="product_heading">Our Product & Services</p>
          <div className="product_group">
            <div className="left_text">
              <p className="left_product_heading">HR Tech</p>
              <p className="left_product_text">
                Experience the new way of job search with AI
                <br /> assisted interview and resume building with <br />
                computer vision, natural language processing
                <br /> & deep learning that helps in matching the
                <br /> right candidate to the recruiter.
              </p>
            </div>
            <div className="right_image">
              <img className="land_img" src={land} alt="window" />
            </div>
          </div>

          <div className="product_group">
            <div className="right_image">
              <img className="land_img" src={land} alt="window" />
            </div>
            <div className="left_text">
              <p className="left_product_heading">Insure Tech</p>
              {/* <p className='left_product_text'> A SaaS platform that sells byte-<br />sized insurance products with smart<br /> pricing engine and provides cross-<br />selling & up-selling decisions with<br /> analytics</p> */}
              <p className="left_product_text">
                Experience the new way of job search with AI
                <br /> assisted interview and resume building with <br />
                computer vision, natural language processing
                <br /> & deep learning that helps in matching the
                <br /> right candidate to the recruiter.
              </p>
            </div>
          </div>

          <div className="product_group">
            <div className="left_text">
              <p className="left_product_heading">On-demand Commerce</p>
              <p className="left_product_text">
                Hyperlocal on-demand commerce that
                <br /> provides near real-time intelligence on price
                <br /> comparison, product recommendation with
                <br /> analytics on last-mile delivery
              </p>
            </div>
            <div className="right_image">
              <img className="land_img" src={land} alt="window" />
            </div>
          </div>
        </div>
      </div>
      <div className="tech_main">
        <div className="container">
          <div className="tech_container">
            <p className="tech">What do We do?</p>
            <div className="tech_body">
              <div className="single_card" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <div className="tech_icon">
                  <img src={natural} alt="ref" />
                </div>
                <div className="tech_content">
                  <p className="tech_heading">
                    Natural Language <br />
                    Processing (NLP)
                  </p>
                  <p className="tech_text">
                    We help to break the language
                    <br /> barrier by interacting between
                    <br /> computer and human language
                    <br /> with the help of NLP. A few of
                    <br /> our solutions include
                    <br /> Contextual Chatbot, Speech to
                    <br /> text analytics & AI
                    <br /> Recommendation frameworks.
                  </p>
                </div>
              </div>
              <div className="single_card" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <div className="tech_icon">
                  <img src={vision} alt="vision"/>
                </div>
                <div className="tech_content">
                  <p className="tech_headings">Computer Vision</p>
                  <p className="tech_text">
                    {" "}
                    Video and Image Analytics,
                    <br /> Facial Recognition & Sentiment
                    <br /> analysis in the video are
                    <br /> powered and supported with
                    <br />
                    Computer vision, an extensive
                    <br /> set of diverse tasks, combined
                    <br /> to achieve highly sophisticated
                    <br /> application to interpret and
                    <br /> understand the visual world.
                  </p>
                </div>
              </div>
              <div className="single_card" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <div className="tech_icon">
                  <img src={data} alt="data"/>
                </div>
                <div className="tech_content">
                  <p className="tech_headings">Data Engineering</p>
                  <p className="tech_text">
                    {" "}
                    Data engineering is an
                    <br /> approach to designing and
                    <br /> generating information
                    <br /> systems that uses Massively
                    <br /> Parallel Processing of data at
                    <br /> Scale, Intelligent DevOps
                    <br /> monitoring system using
                    <br /> Predictive analytics, De-
                    <br />
                    noising the data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="crew">
        <div className="crew_main">
          <div className="crew_left">
            <p className="crew_heading">Join the crew</p>
            <p className="crew_subheading">
              If you are excited to be part of product development
              <br />
              in the field of Artificial Intelligence and Machine Learning
            </p>
            {/* <p className='crew_btn'>
  <p className='apply_text'>Apply for an opening</p>
</p> */}
            <button className="apply_btn">Apply for an opening</button>
          </div>
          <div className="crew_right" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={boat} alt="boat" />
            {isShown && <img className="boat_secondary" src={boatpart} alt="boat part " />}
          </div>
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
