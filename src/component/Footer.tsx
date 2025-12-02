const Footer=()=>{
    return(
   <footer>
        <div className="footer-brand">
          <h3>Innovest</h3>
          <p>© 2025 All Rights Reserved.</p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <div className="footer-policy">
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </footer>
    )
}
export default Footer