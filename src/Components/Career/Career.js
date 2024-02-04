import React from "react";
import "../Career/Career.css";
import Header from "../Header/Header";
import one from "../../asset/one.svg";
import two from "../../asset/two.svg";
import three from "../../asset/three.svg";
import gay from "../../asset/gayathri.svg";
import arv from "../../asset/arv.svg";
import dug from "../../asset/dugout.svg";
import Footer from "../Footer/Footer";
import fiox from "../../asset/fixo.svg";
import fun from "../../asset/funfriday.svg";
import hand from "../../asset/hands.svg";
import { Link } from "react-router-dom";
const Career = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="m-0 p-0">
        <img className="hand_images" src={hand} alt="career" />
        <div className="header_position">
          <Header></Header>
        </div>
      </div>
      <div className="career_content">
        <p className="career_heading" data-aos="fade-left" data-aos-duration="1500">
          Join the team
        </p>
        <p className="career_subtitle" data-aos="fade-right" data-aos-duration="1500">
          {" "}
          “Your Dream is our Reality”
        </p>
        <p className="career_button" data-aos="zoom-in" data-aos-duration="1500">
          <a href="#opening" className="menu-link">
            <div className="career_btn_text">Apply for an opening</div>
          </a>
        </p>
      </div>
      <div className="container">
        <div className="career_learn">
          <p className="career_ref" data-aos="fade-right" data-aos-duration="2500">
            Learn.{" "}
          </p>
          <p className="career_ref" data-aos="flip-up" data-aos-duration="2500">
            Work.{" "}
          </p>
          <p className="career_ref" data-aos="fade-left" data-aos-duration="2500">
            Fun.
          </p>
        </div>
        <p className="career_subtext" data-aos="zoom-in-down" data-aos-duration="1500">
          {" "}
          Explore and gain an insight of learning in a sustainable way to keep the good times that remains every bit as Fun.
        </p>
      </div>
      <div className="container-fluid bg_career_color">
        <div className="app">
          <p className="app_heading">Application Process</p>
        </div>
        <div className="app_count">
          <div className="app_card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src={one} alt="one" />
            <p className="app_text">Choose a position that suits you and submit your application, along with your work sample.</p>
          </div>
          <div className="app_card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src={two} alt="one" />
            <p className="app_text">If we like your work, you'll be called for interview where your skills and knowledge will be assessed.</p>
          </div>
          <div className="app_card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src={three} alt="one" />
            <p className="app_text">After a successful performance in the interview, get an offer and become a part of the IMPELOX.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="inside_heading">Inside Impelox</p>
        <div className="inside_parent">
          <div className="inside" data-aos="zoom-in-right" data-aos-duration="1500">
            <img src={gay} alt="award" />
            <p className="inside_award">Award winner</p>
            <p className="inside_subheading">The great way to acknowledge the people that matter does wonders for development.</p>
          </div>
          <div className="inside" data-aos="zoom-in-bottom" data-aos-duration="1500">
            <img src={arv} alt="award" />
            <p className="inside_award">Award winner</p>
            <p className="inside_subheading">The great way to acknowledge the people that matter does wonders for development.</p>
          </div>
          <div className="inside" data-aos="zoom-in-left" data-aos-duration="1500">
            <img src={dug} alt="award" />
            <p className="inside_award">Award winner</p>
            <p className="inside_subheading">The great way to acknowledge the people that matter does wonders for development.</p>
          </div>
        </div>
        <div className="inside_parents">
          <div className="inside" data-aos="zoom-in-left" data-aos-duration="1500">
            <img src={fiox} alt="award" />
            <p className="inside_award">Fi-OX</p>
            <p className="inside_subheading">The great way to acknowledge the people that matter does wonders for development.</p>
          </div>
          <div className="inside" data-aos="zoom-in-right" data-aos-duration="1500">
            <img src={fun} alt="award" />
            <p className="inside_award">Fun Friday</p>
            <p className="inside_subheading">Employers are at their happiest on Mondays, Employees are at their happiest on Fridays.</p>
          </div>
        </div>
      </div>
      <div className="container" id="opening">
        <p className="opening">Current Openings</p>
        <div className="opening_main">
          <div className="open_gap">
          <Link className="menu-link" to="/job">
            <div className="opening_content">
              <p className="position">Full Stack Developer</p>
              <p className="view_opening">View opening</p>
            </div>
          </Link>
          </div>
          <div className="open_gap_footer">
          <Link className="menu-link" to="/job">
            <div className="opening_content">
              <p className="position">Full Stack Developer</p>
              <p className="view_opening">View opening</p>
            </div>
          </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid m-0 p-0 footer_opening">
        <Footer />
      </div>
    </div>
  );
};

export default Career;
