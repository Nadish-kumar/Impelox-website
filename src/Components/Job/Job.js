import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../Job/Job.css";

const Job = () => {
  return (
    <>
    <Header />
      <div className="container">
        <p className="job">Full Stack Developer</p>
        <p className="job_content">Do you possess a passion for technology and want to be part of a team that builds exciting products using Artificial Intelligence?</p>
        <p className="job_content">We at Impelox Tech are looking for a self-driven individuals for the position - Full Stack Developer who is excited to be a part of our growth journey.</p>
        <p className="job_content">You will get to work with a team of engineers to build solutions that will help customers to take better decisions by providing easy to use and intelligent mobile apps, websites with insightful data visualizations and workflows.</p>
      </div>
      <div className="container job_back">
        <div className="container">
          <p className="job_res">Responsibilities</p>
          <ul className="job_desc">
            <li>Looking for a logical and talented technologist to join us as a Technical Architect for building a new web application product, using react & elixir. You should be a subject matter expert and coupled with an ability to work with the product team.</li>
            <li>Establish guidelines in terms of best practices and oversee the proper implementation of those standards.</li>
            <li>Build modular, scalable, robust, and reusable code with front-end technologies using good engineering practices for maintenance and security.</li>
            <li>Research on new technologies as needed and develop proofs-of-concept and perform.</li>
            <li>Responsible for the process adherence, timeliness of delivery and quality of the components/modules assigned.</li>
            <li>Responsible for providing estimations for the modules/components assigned.</li>
            <li>Work with, and help lead, the team to build high-quality web pages and user interfaces for web applications.</li>
            <li>Build front-end functionality from feature requirements in an Agile, iterative and phased approach.</li>
            <li>Work to enhance the proposed solution and produce great user experiences.</li>
            <li>Complete bug fixes based on QA reports. Find/fix problems, document/review, and work within the team to follow them to the conclusion</li>
            <li>Design and develop our applications, and coordinate with the rest of the team working on different layers of the infrastructure.</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="container">
          <p className="job_expect">We expect</p>
          <ul className="job_ref">
            <li>Must Haves</li>
            <li>React JS, MVC, HTML, Javascript, Testing Framework.</li>
            <li>Proven experience as a Technical Architect.</li>
            <li>2-8 years of full stack product engineering experience in a SaaS or a product development.</li>
            <li>Experience with testing framework.</li>
            <li>Experience writing JavaScript that is maintainable & scalable.</li>
            <li>Development experience with different browser technologies and mobile environments</li>
            <li>Knowledge of the Agile methodology including sprints, SCRUMS and test-driven development</li>
            <li>Knowledge of User-centred Design</li>
            <li>A deep Understanding of Rest and API Designs.</li>
          </ul>
        </div>
      </div>
      <div className="intersted">
        <p> If you are interested, please send your resume to</p>
        <p>contact@impelox.com</p>
      </div>
      <div className="footer_job">
      <Footer />
      </div>
     
    </>
  );
};

export default Job;
