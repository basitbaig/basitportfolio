import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const about = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src="assets/img/testimonial-2.jpg"
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>{" "}
                          <span>Basit Baig</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>{" "}
                          <span>full stack developer</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>{" "}
                          <span>basitbaig@msn.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span>(+92) 334-3379794</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      {/* <div
                        className="progress-bar"
                        role="progressbar"
                        style="width: 85%;"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div> */}
                    </div>
                    <span>CSS3</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      {/* <div
                        className="progress-bar"
                        role="progressbar"
                        style="width: 75%"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div> */}
                    </div>
                    <span>REACT</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      {/* <div
                        className="progress-bar"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div> */}
                    </div>
                    <span>JAVASCRIPT</span>{" "}
                    <span className="pull-right">90%</span>
                    <div className="progress">
                      {/* <div
                        className="progress-bar"
                        role="progressbar"
                        style="width: 90%"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">
                        Welcome to my portfolio website! With over 15 years of experience as a full-stack developer, I have honed my skills in a variety of programming languages, frameworks, and technologies. I specialize in building scalable, responsive, and user-friendly web applications for clients across a range of industries.
                    </p>
                    <p className="lead">
                       My expertise lies in front-end development using HTML, CSS, JavaScript, and various libraries and frameworks such as React, Vue, and Angular. I also have a strong background in back-end development using languages such as Node.js, Python, and PHP, and databases including MySQL, PostgreSQL, and MongoDB.
                    </p>
                    <p className="lead">
                       Throughout my career, I have worked with clients of all sizes, from startups to large enterprises, and have a proven track record of delivering high-quality solutions on time and within budget. I am committed to staying up-to-date with the latest trends and technologies in the industry and am always looking for ways to improve my skills and knowledge.
                    </p>
                    <p className="lead">
                       I take a collaborative approach to every project, working closely with clients to understand their unique needs and goals. Whether you need a custom web application, a mobile app, or a complex e-commerce platform, I have the expertise and experience to deliver the results you need.
                    </p>  
                    <p className="lead">
                      Please take a look at my portfolio to see some examples of my work, and feel free to contact me if you have any questions or if you would like to discuss your project in more detail.
                    </p>                                       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about