import './App.css';

import project1Img from "./assets/images/home1.jpg";
import project2Img from "./assets/images/home2.jpg";
import project3Img from "./assets/images/home3.jpg";
import brush1 from "./assets/images/brush1.png";


import interiorImg from "./assets/images/roller.png";
import exteriorImg from "./assets/images/brush.png";
import textureImg from "./assets/images/texture.png";
import commercialImg from "./assets/images/spraygun.png";

function App() {
  return (
    <div className="App">

      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-left">

         

          {/* Two Line Heading - Typewriter Effect */}
          <h1 className="hero-title gradient-title">
            <span className="typewriter-line tw-line1">STAR PROFESSIONAL</span>
            <br />
            <span className="typewriter-line tw-line2">HOME PAINTING</span>
            <span className="tw-cursor">|</span>
          </h1>

          <p className="hero-text">
            We provide premium Interior, Exterior, Texture and Commercial
            painting services with high-quality materials and expert workmanship.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Get Free Quote
            </a>

            <a href="#projects" className="secondary-btn">
              View Projects
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>500+</h3>
              <p>Projects Done</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>

        </div>

        <div className="hero-right">
          <img src={project2Img} alt="Painting House" />
        </div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="services" id="services">

        <div className="section-heading">
          <div>
            <p className="section-title">
              WHAT WE USE
            </p>
            <h2>
              Professional Painting 
              <br />
              <span>Tools</span>
            </h2>
          </div>
          <p>We use premium rollers, brushes, trowels, and airless spray guns to deliver smooth finishes and long-lasting painting results.</p>
        </div>

        <div className="service-container">

          {/* Interior */}
          <div className="service-card">
            <div className="service-top">
              <span className="service-number"></span>
            </div>
            <img
              src={interiorImg}
              alt="Interior Painting"
              className="service-image"
            />
            <h3>Premium Paint Roller</h3>
            <p>
              Smooth and even wall finishes using premium quality paint rollers for homes, apartments, offices, and commercial spaces.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

          {/* Exterior */}
          <div className="service-card dark-card">
            <div className="service-top">
              <span className="service-number"></span>
            </div>
            <img
              src={exteriorImg}
              alt="Exterior Painting"
              className="service-image"
            />
            <h3>Professional Paint Brush</h3>
            <p>
              Precision painting for edges, corners, doors, windows, trims, and detailed finishing with high-quality brushes.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

          {/* Texture */}
          <div className="service-card">
            <div className="service-top">
              <span className="service-number"></span>
            </div>
            <img
              src={textureImg}
              alt="Texture Painting"
              className="service-image"
            />
            <h3>Wall Finishing Trowel</h3>
            <p>
              Professional wall putty and smooth finishing using high-quality plastering trowels for a perfect paint-ready surface.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

          {/* Commercial */}
          <div className="service-card">
            <div className="service-top">
              <span className="service-number"></span>
            </div>
            <img
              src={commercialImg}
              alt="Commercial Painting"
              className="service-image"
            />
            <h3>Airless Spray Gun</h3>
            <p>
              Fast and flawless spray painting for villas, apartments, commercial buildings, factories, and large-scale projects.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="about" id="about">

        <div className="about-image">
          <img
            src={brush1}
            alt="Painting Experience"
            className="about-brush-image"
          />

          <div className="experience-box">
            <strong>10+</strong>
            <span>
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>

        <div className="about-content">

          <p className="section-title">
            ABOUT STAR
          </p>

          <h2>
            We Don't Just Paint.
            <br />
            We <span>Transform</span> Spaces.
          </h2>

          <p>
            Star Professional Painting provides reliable and
            high-quality painting services for residential and
            commercial spaces.
          </p>

          <p>
            Our experienced painters focus on clean work,
            excellent finishing, quality materials and complete
            customer satisfaction.
          </p>

          <div className="features">
            <div>
              <span>✓</span>
              Experienced Painters
            </div>

            <div>
              <span>✓</span>
              Quality Materials
            </div>

            <div>
              <span>✓</span>
              Clean Finishing
            </div>

            <div>
              <span>✓</span>
              On-Time Completion
            </div>
          </div>

          <a href="#contact" className="primary-btn dark-btn">
            Work With Us
            <span>↗</span>
          </a>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects" id="projects">

        <div className="section-heading">

          <div>
            <p className="section-title">
              OUR WORK
            </p>

            <h2>
              Recent <span>Projects</span>
            </h2>
          </div>

          <p>
            Take a look at some of the painting projects
            completed by our professional team.
          </p>

        </div>

        <div className="project-container">

          {/* Project 1 */}
          <div className="project-card">
            <img 
              src={project1Img} 
              alt="Modern Home" 
              className="project-image"
            />
            <div className="project-info">
              <small>RESIDENTIAL</small>
              <h3>Modern Home</h3>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img 
              src={project2Img} 
              alt="Luxury Interior" 
              className="project-image"
            />
            <div className="project-info">
              <small>INTERIOR</small>
              <h3>Luxury Interior</h3>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img 
              src={project3Img} 
              alt="Office Space" 
              className="project-image"
            />
            <div className="project-info">
              <small>COMMERCIAL</small>
              <h3>Office Space</h3>
            </div>
          </div>

        </div>

      </section>

      {/* ================= WHY US ================= */}
      <section className="why-us">

        <div className="why-heading">

          <p className="section-title">
            WHY CHOOSE US
          </p>

          <h2>
            Quality You Can See.
            <br />
            <span>Service You Can Trust.</span>
          </h2>

        </div>

        <div className="why-container">

          <div className="why-card">
            <strong>01</strong>
            <h3>Professional Team</h3>
            <p>
              Skilled painters who care about every detail.
            </p>
          </div>

          <div className="why-card">
            <strong>02</strong>
            <h3>Quality Materials</h3>
            <p>
              We use reliable materials for beautiful
              and long-lasting results.
            </p>
          </div>

          <div className="why-card">
            <strong>03</strong>
            <h3>Clean Work</h3>
            <p>
              We respect your space and keep the work
              area clean.
            </p>
          </div>

          <div className="why-card">
            <strong>04</strong>
            <h3>Fair Pricing</h3>
            <p>
              Professional quality at transparent pricing.
            </p>
          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">

        <div className="contact-content">

          <p className="section-title">
            LET'S TALK
          </p>

          <h2>
            Ready to Give Your
            <br />
            Space a <span>New Look?</span>
          </h2>

          <p>
            Contact Star Professional Painting today and
            get your free quote.
          </p>

          <div className="contact-buttons">

            <a
              href="tel:8807239224"
              className="primary-btn"
            >
              Call Us Now
              <span>↗</span>
            </a>

            <a
              href="mailto:info@starpainting.com"
              className="secondary-btn"
            >
              Send an Email
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-content">

          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              <h3>Star Professional Home Painting</h3>
            </a>

            <p>
              Professional painting services for homes,
              offices and commercial spaces.
            </p>

          </div>

          <div className="footer-links">

            <h4>Navigation</h4>

            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>

          <div className="footer-contact">

            <h4>Contact</h4>

            <a href="tel:+919677826827">
              +91 9677826827
            </a>

            <a href="mailto:info@starpainting.com">
              info@starpainting.com
            </a>

            <p>
              Dindigul, Tamil Nadu, India
            </p>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Star Professional Painting.
            All Rights Reserved.
          </p>

          <p>
            Professional Painting Services
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;