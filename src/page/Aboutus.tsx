

const AboutPage = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="img/Logo.png" alt="Innovest Logo" />
            Innovest
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-3">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Discover</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>

            <button className="btn-login">Log in</button>
            <button className="btn-signup">Sign up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <img src="img/hero-page.png" alt="Hero Image" className="hero-image" />
      </div>

      {/* Story Title */}
      <div className="section-title">Our Story</div>

      {/* Content Boxes */}
      <div className="content-boxes">
        {[1, 2].map((i) => (
          <div className="content-box" key={i}>
            <div className="question-box">
              <div className="question-text">
                How can we bridge the gap between ambitious startups and the investors who believe in innovation ??
              </div>
            </div>

            <div className="answer-box">
              <div className="answer-text">
                We created this platform to empower entrepreneurs to showcase their ideas, gain the right funding, 
                and grow sustainably. At the same time, we give investors access to verified opportunities that 
                match their interests and reduce risks.
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-header">
          <div className="team-title">meet team</div>
          <div className="team-subtitle">
            With Our Team, you can expect<br />
            personalized attention and<br />
            engaging designs.
          </div>
        </div>

        <div className="team-members">
          {[
            { img: "team-member-1.jpg", name: "Abanoub Fahmy" },
            { img: "team-member-2.jpg", name: "Abdulrahman Elnady" },
            { img: "team-member-3.jpg", name: "Sahar Maray" },
            { img: "team-member-4.jpg", name: "Mona Ahmed" }
          ].map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.img} alt={member.name} className="member-image" />
              <div className="member-name">{member.name}</div>
              <div className="member-description">
                Lacus laoreet non curabitur gravida arcu<br />
                ac tortor dignissim
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
