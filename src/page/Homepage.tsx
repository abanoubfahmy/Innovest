import '../styles/Hompage.css'  
  import Navbar from "../component/Navbar";
  import Footer from "../component/Footer";
  import Rectangle from '../assets/Rectangle 31.png'
  import Rectangle2 from '../assets/Rectangle 35.png'
  import Rectangle3 from '../assets/Rectangle 33.png'
  import img12 from '../assets/image 12.png'
  const Homepage = () => {
  return (
<>
  {/* Navbar */}
  <Navbar />
  {/* Hero Section */}
  <section className="hero">
    <div className="hero-content">
      <h1>Bridging Startups and Investors</h1>
      <p>Connecting Innovative Entrepreneurs With Visionary Investors</p>
      <button className="btn">For Entrepreneurs</button>
      <button className="btn1">For Investors</button>
    </div>
  </section>
  {/* Featured Startups */}
  <section className="next-section">
    <div className="container">
      <h2>
        Featured <span>Startups</span>
      </h2>
      <div className="row">
        <div className="card">
          <img src={Rectangle} className="img-fluid" alt="" />
          <span>Tech Innovators</span>
          <p>
            Revolutionizing the tech industry with groundbreaking solutions.
          </p>
        </div>
        <div className="card">
          <img src={Rectangle2} className="img-fluid" alt="" />
          <span>Eco Solutions</span>
          <p>Innovating sustainable energy solutions for a greener planet.</p>
        </div>
        <div className="card">
          <img src={Rectangle3} className="img-fluid" alt="" />
          <span>Health Pioneers</span>
          <p>
            Leading the way in medical technology and healthcare innovation.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="next-section">
    <div className="container text-center">
      <h2>
        What <span>Our Users Say</span>
      </h2>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <img
            src={img12}
            className="img-fluid"
            alt="Startup image"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <Footer />
</>

  );
};

export default Homepage;
