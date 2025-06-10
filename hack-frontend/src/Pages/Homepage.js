import { Link } from "react-router-dom";
// import NavBar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import Cards from "../Components/Cards";
// home page === "/"
const Homepage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Food Donation Platform</div>

        <nav className="nav">
          <a href="/login" className="nav-link">
            Login
          </a>
          <a href="/signup" className="nav-link">
            Sign Up
          </a>

          <li className="nav-item col-3">
            <Link to="/Form" className="nav-link">
              OrderForm
            </Link>
          </li>

          {/* <a 
            <Link to="/Dashboard" className="nav-link">
              OrderForm
            </Link>
          </a> */}

          {/* <Link className="nav-tabs dropdown-item" to="/Terms"> */}
          <a href="/signup" className="nav-link">
            About Us
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Reduce Food Waste. Feed Communities.</h1>
          <p className="hero-subtitle">
            Connecting dining halls with food banks to eliminate food waste.
          </p>
          <a href="/signup" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="impact-section">
        <div className="impact-item">
          <h3>1000+ Meals Saved</h3>
          <p>
            In the last year, we’ve saved thousands of meals from going to
            waste.
          </p>
        </div>
        <div className="impact-item">
          <h3>50+ Charities</h3>
          <p>Partnering with local food banks and charitable organizations.</p>
        </div>
        <div className="impact-item">
          <h3>20+ Dining Halls</h3>
          <p>Working with universities to reduce food waste.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-steps">
          <div className="step">
            <h3>1. Dining Halls Post Excess Food</h3>
            <p>
              Dining halls post food donations that are still fresh and
              available for pickup.
            </p>
          </div>
          <div className="step">
            <h3>2. Charities Claim the Food</h3>
            <p>
              Registered charities can claim the food donations that match their
              needs.
            </p>
          </div>
          <div className="step">
            <h3>3. Food is Picked Up and Delivered</h3>
            <p>
              Charities arrange to pick up the food and distribute it to those
              in need.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Food Donation Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
