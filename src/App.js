import './App.css';

import project1Img from "./assets/images/home1.jpg";
import project2Img from "./assets/images/home2.jpg";
import project3Img from "./assets/images/home3.jpg";
import brush1 from "./assets/images/brush1.png";

const interiorImg =
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500";

const exteriorImg =
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500";

const textureImg =
  "https://images.unsplash.com/photo-1562184552-997c461abbe6?w=500";

const commercialImg =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500";

function App() {

  
 return (
  <div className="App">

   

    {/* ================= HERO ================= */}
    <section className="hero" id="home">

      <div className="hero-left">

        <h1 className="hero-title">
  <span className="star-icon"></span>

  <span className="title-top">
    STAR PROFESSIONAL
  </span>

  <span className="title-top">
    HOME PAINTING
  </span>
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
              WHAT WE DO
            </p>
            <h2>
              Our Painting
              <br />
              <span>Services</span>
            </h2>
          </div>
          <p>
            From a single room to a complete building, we provide
            professional painting solutions with beautiful finishing
            and reliable service.
          </p>
        </div>

        <div className="service-container">

          {/* Interior */}
          <div className="service-card">
            <div className="service-top">
              <span className="service-number">01</span>
            </div>
            <img
              src={interiorImg}
              alt="Interior Painting"
              className="service-image"
            />
            <h3>Interior Painting</h3>
            <p>
              Beautiful and smooth interior painting services
              for homes, apartments and offices.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

          {/* Exterior */}
          <div className="service-card dark-card">
            <div className="service-top">
              <span className="service-number">02</span>
            </div>
            <img
              src={exteriorImg}
              alt="Exterior Painting"
              className="service-image"
            />
            <h3>Exterior Painting</h3>
            <p>
              Professional exterior painting with durable,
              weather-resistant and long-lasting finishing.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

          {/* Texture */}
          <div className="service-card">
            <div className="service-top">
              <span className="service-number">03</span>
            </div>
            <img
              src={textureImg}
              alt="Texture Painting"
              className="service-image"
            />
            <h3>Texture Painting</h3>
            <p>
              Modern texture designs and creative wall finishes
              to give your space a unique appearance.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

          {/* Commercial */}
          <div className="service-card">
            <div className="service-top">
              <span className="service-number">04</span>
            </div>
            <img
              src={commercialImg}
              alt="Commercial Painting"
              className="service-image"
            />
            <h3>Commercial Painting</h3>
            <p>
              Complete painting solutions for shops, offices,
              apartments and commercial buildings.
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
              href="tel:+919999999999"
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

            <h4>
              Navigation
            </h4>

            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>


          <div className="footer-contact">

            <h4>
              Contact
            </h4>

            <a href="tel:+919999999999">
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