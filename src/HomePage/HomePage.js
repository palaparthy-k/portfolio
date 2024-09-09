import React from 'react';
import './HomePage.css';
import githubIcon from './github.png';
import linkedinIcon from './linkedin.png';
import profilePic from './profile.jpeg';
import BeyondTheBooks from './components/BeyondTheBooks';
const HomePage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage" id='homepage'>
      <header className="navbar">
        <div className="logo" onClick={handleRefresh}>palaparthyk</div>
        <ul>
          <li onClick={() => scrollToSection('homepage')}>Home</li>
          <li onClick={() => scrollToSection('about-me')}>About Me</li>
          <li>Projects</li>
          <li>Badges of Brilliance</li>
          <li onClick={() => scrollToSection('beyond-the-books')}>Beyond the Books</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </header>
      
      <div className="card-container" id='card-container'>
        <div className="left-section">
          <div className="profile-card">
            <img src={profilePic} alt="Keerthana Palaparthy" />
            <h1>Keerthana <br />Palaparthy</h1>
            <hr />
            <p>Undergrad Student</p>
          </div>
        </div>
        
        <div className="right-section" id="right">
          <div className="content-cardintro">
            <h2>Hello!</h2>
            <p>
              I'm currently a student pursuing 
              Computer Science Engineering with a specialization in Cyber Security 
              at the Institute of Aeronautical Engineering (IARE). I'm currently 
              exploring new technologies and expanding my skill set in web 
              development and cybersecurity.
            </p>
          <div className="button-container">
          <button>Resume</button>
          <button>Contact</button>
          </div>
          </div>
          <div id="about-me"></div>
          <br></br><br></br><br></br>
          <br></br><br></br>
          <div className="content-card">
            <section className="about-me">
              <h2>About Me</h2>
              <div className="conthr"><hr /></div>
              <div className="subsection">
                <h3>Who Am I?</h3>
                <p>I have always been passionate about technology and problem-solving...</p>
              </div>
              <div className="subsection">
                <h3>Education</h3>
                <p>I am currently pursuing my Bachelor's degree in Computer Science...</p>
              </div>
            </section>
          </div>
          <div id="beyond-the-books"></div>
          <br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <BeyondTheBooks/>
          <div id="contact"></div>
          <br></br><br></br><br></br>
          <br></br><br></br>
          <div className="content-card" id="contact">
            <section className="contact">
              <h2>Contact</h2>
              <div className="conthr"><hr /></div>
              <div className="contact-cards">
                <div className="contact-info">
                  <h3><i>Contact Information</i></h3><br></br>
                  <div class='p'><p><b><u>Email:</u></b> keerthana.palaparthy@gmail.com</p>
                  <p><b><u>Phone:</u></b> +91 90592 19619</p>
                  <p><b><u>Address:</u></b> Hyderabad, India</p></div>
                </div><br></br>
                <div className="social-info">
                  <h3><i>Social Profiles</i></h3><br></br><br></br>
                  <div className="social-icons">
                  <a href="https://github.com/palaparthy-k">
                  <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/keerthanapalaparthy/" >
                  <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                  </div><br></br>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
