import React from "react";
import "../Company/Company.css";
import sir from "../../asset/venk.png";
import Header from "../Header/Header";
import boat from "../../asset/boat.svg";
import Footer from "../Footer/Footer";
import thilga from "../../asset/thilga.png";
import arvind from "../../asset/arvind.png";
import gay from "../../asset/gaythri.png";
import sam from "../../asset/sam.png";
import arun from "../../asset/arun.png";
import susmitha from "../../asset/susmitha.png";
import kaliselva from "../../asset/kaliselva.png";
import kali from "../../asset/kali.png";
import asrin from "../../asset/asrin.png";
import { useState } from "react";
import boatpart from "../../asset/boat2.svg";
import { Link } from "react-router-dom";

const Company = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container-fluid bg_company_color p-0">
      <div className="company_image">
        {/* <div className="header_bgcolor">
          <div className="container">
            <div className="company_header">
              <div className="company_header_left">
                <img className="company_logo" src={logo} />
              </div>
              <div className="company_header_right">
                <ul className="option_body">
                  <li className="home_company">Home</li>
                  <li className="home_company">Careers</li>
                  <li className="home_company">Company</li>
                  <li className="home_company">Contact Us</li>
                </ul>
              </div>
            </div>
          
          </div>
        
        </div> */}
        <Header />
      </div>
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-md-3">
            <p className="story_heading">
              The Story of <br />
              Impelox
            </p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-7">
            <p className="story_body">
              <span className="story_highlight">Founded by Venkatesh and Thilaga</span> in 2021, "Impelox" means to move forward. The idea of starting a business to bring a change originated back in 2010 and the domain name was registered in the same year.
              <br />
              <br /> We've always been fascinated by human intelligence and how it shaped the modern world we live in today. We believe that by better understanding intelligence, we could use that knowledge to build solutions to difficult problems. To accelerate the field of Artificial Intelligence,
              we took an interdisciplinary approach, bringing together new ideas and advances in machine learning, Deep learning, engineering, mathematics, simulation and computing infrastructure, along with new ways of organising scientific endeavour.
              <br />
              <br /> We believe in humanizing the technology that can understand us with the context and allow every business or individual to interact with the technology similar to our interactions so that decisions are made simple and time is saved from doing mundane tasks.
              <br />
              <br /> We’ve learned how to listen(because data speaks when we listen), automate, personalize and optimize every conversation to achieve frictionless customer experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid vision">
        <div className="container">
          <div className="vision_main">
            <div className="vision_left">
              <p className="vision_header" data-aos="fade-up" data-aos-duration="1000">
                Our Vision
              </p>
            </div>
            <div className="vision_right">
              <p className="vision_body" data-aos="fade-up" data-aos-duration="2000">
                The vision of the company is to make the world take the best
                <br /> decisions using the meaningful data provided by Artificial
                <br /> intelligence and find solutions to problems with constant
                <br /> innovation using cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid team">
        <div className="container">
          <p className="team_header">Meet our Team</p>
          <div className="founder_card">
            <div className="team_cards" data-aos="zoom-in-right" data-aos-duration="1500">
              <img className="mambers_image" src={sir} alt="pic" />
              <div className="member_content">
                <p className="name m-0 p-0">Venkatesh T V </p>
                <p className="position_office_office m-0 p-0">Founder</p>
                <p className="member_about m-0">Venkatesh led an edtech startup as CTO before founding Impelox Tech and also has led teams in a US based broadband service provider, Viasat and was in Japan at a startup sinceinception.</p>
              </div>
            </div>
            <div className="team_cards" data-aos="zoom-in-left" data-aos-duration="1500">
              <img className="mambers_image" src={thilga} alt="pic" />
              <div className="member_content">
                <p className="name m-0 p-0">Thilaga Ramalingam</p>
                <p className="position_office_office m-0 p-0">Founder</p>
                <p className="member_about m-0">Thilaga was with CISCO in her previous employments and is a people person. She takes care of corporate strategy and culture at Impelox Tech.</p>
              </div>
            </div>
          </div>

          <div className="empolyee_card">
            <div className="team_card" data-aos="fade-up-right" data-aos-duration="1500">
              <img className="mambers_image" src={arvind} alt="pic" />
              <div className="member_content">
                <p className="name m-0 p-0">Kotha Venkat Sai Aravind</p>
                <p className="position_office_office m-0 p-0">Team Lead</p>
                <p className="member_about m-0">Aravind has interest in solving new challenges and spreads positivity with a good attitude. His confidence in project solutioning and lead a team has grown since he joined.</p>
              </div>
            </div>
            <div className="team_card" data-aos="fade-up-right" data-aos-duration="1500">
              <img className="mambers_image" src={gay} alt="pic" />
              <div className="member_content">
                <p className="name m-0 p-0">Gayathri Vasudevan</p>
                <p className="position_office m-0 p-0">Full Stack Developer</p>
                <p className="member_about m-0">Gayathri loves to develop mobile apps and grabs every opportunity to learn new in technology. She has mastered the way to build beautiful apps and its styles</p>
              </div>
            </div>
            <div className="team_card" data-aos="fade-up-left" data-aos-duration="1500">
              <img className="mambers_image" src={arun} alt="pic" />
              <div className="member_content">
                <p className="name m-0 p-0">Arun</p>
                <p className="position_office m-0 p-0">Senior Full Stack Developer</p>
                <p className="member_about m-0">Arun enjoys the application of technology and creates with dedication. Arun never misses the opportunity to bring a change to the product or process</p>
              </div>
            </div>
            <div className="team_card" data-aos="fade-up-left" data-aos-duration="1500">
              <img className="mambers_image" src={sam} alt="pic" />
              <div className="member_content">
                <p className="name m-0 p-0">Sam Israel</p>
                <p className="position_office m-0 p-0">Product Lead</p>
                <p className="member_about m-0">Sam imagines the possibilities and wonders of the world with his creativity. Products of Impelox tech are crafted with passion by Sam and the user experience journey are drafted with attention to detail</p>
              </div>
            </div>
            <div className="team_card" data-aos="fade-up-right" data-aos-duration="1500">
              <img className="mambers_image" src={susmitha} alt="pic" />
              <div className="member_content">
                <p className="name m-0 p-0">Susmitha Chelian</p>
                <p className="position_office m-0 p-0">Full Stack Developer</p>
                <p className="member_about m-0">Susmitha is an enthusiastic person who likes to own the product with her ability to program and interest to maintain the quality of the product. Susmitha's has a good appetite for knowledge and never misses the opportunity to learn.</p>
              </div>
            </div>
            <div className="team_card" data-aos="fade-up-right" data-aos-duration="1500">
              <img className="mambers_image" src={kaliselva} alt="pic" />
              <div className="member_content">
                <p className="name m-0 p-0">Kalidas Selvaraj</p>
                <p className="position_office m-0 p-0">Project Manager</p>
                <p className="member_about m-0">
                  A true mentor makes sure that the mentees learns the art of solving problems independently. Thanks to Kali's previous experience in training, he is able to give the right direction to this mentees. Kali likes to tackle the problems with his expterise in Full-stack development and
                  brings the best practice in the team.
                </p>
              </div>
            </div>
            <div className="team_card" data-aos="fade-up-left" data-aos-duration="1500">
              <img className="mambers_image" src={kali} alt="pic" />
              <div className="member_content">
                <p className="name m-0 p-0">Kalidasan</p>
                <p className="position_office m-0 p-0">Technical Architect</p>
                <p className="member_about m-0">
                  Kalidasan is a keen observer and gives attention to details when comes to solutioning and also to the process followed. He doesn't miss a chance to share his knowledge with others and encourage people to share their knowledge as well. He manages the best practices in development
                </p>
              </div>
            </div>
            <div className="team_card" data-aos="fade-up-left" data-aos-duration="1500">
              <img className="mambers_image" src={asrin} alt="pic" />
              <div className="member_content">
                <p className="name m-0 p-0">Asrin Banu</p>
                <p className="position_office m-0 p-0">Full Stack Developer</p>
                <p className="member_about m-0">Full Stack Developer. Asrin is committed to get the deliverables of the product out with quality. She is disciplined in her food and also in the work. Being a multi-tasker, she enjoys wearing multiple hats.</p>
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
            <Link to="/career" className="menu-link">
              <button className="apply_btn p-0">Apply for an opening</button>
            </Link>
          </div>
          <div className="crew_right" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <img src={boat} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" alt="boat" />
            {isShown && <img className="boat_secondary" src={boatpart} alt="boat part " />}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
};

export default Company;
