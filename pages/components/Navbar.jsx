import React from "react";
import Link from "next/link";
import Script from "next/script";
import Footer from "./Footer";

const Navbar = ({children}) => {
  return (
    <div>
        
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
           <div className="container">
          <Link href="/" className="nav-link active text-white">
            DevHome 
          </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <Link href="/" className="nav-link active text-white" aria-current="page"><li className="nav-item">Home</li></Link>
                    <Link href="/about" className="nav-link text-white"><li className="nav-item">About</li></Link>
                    <Link href="/services" className="nav-link text-white"><li className="nav-item">Services</li></Link>
                    <Link href="/projects" className="nav-link text-white"><li className="nav-item">Work</li></Link>
                   <Link href="/blog" className="nav-link text-white"><li className="nav-item">Blog</li></Link>
                   <Link href="/contact" className="nav-link text-white"><li className="nav-item">Contact</li></Link>
             </ul>
            </div>
         </div>
      </nav>     */}

     

      {/* <div id="preloader"></div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a> */}

      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo">
          <Link href="/" className="nav-link">SimComSol</Link> 
          </h1>
          {/* Uncomment below if you prefer to use an image logo   */}
          {/* <a href="index.html" className="logo"><img src="/assets/img/logo.png" alt="" className="img-fluid"></a> */}

          <nav id="navbar" className="navbar">
            <ul>
            
              <li>     
                <Link href="/" className="nav-link scrollto active">           
                  Home       
                </Link>         
              </li>              
              <li>
                <Link href="/about" className="nav-link scrollto">
                  About
                </Link>
              </li> 
              <li>
                <Link href="/services" className="nav-link scrollto">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="nav-link scrollto">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#blog" className="nav-link scrollto">
                  Blog
                </Link>
              </li>              
              <li>
                <Link href="/contact" className="nav-link scrollto">
                  Contact
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
 
          </div>
      </header>  
        {children}
      <Footer />
    

    </div>
  );
};

export default Navbar;
