import { Link } from "react-router-dom";
// import NavBar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import Cards from "../Components/Cards";
// home page === "/"
const Homepage = () => {
  return (
    <div className="landing-page">
     
<header>
    <img
        src="/IMG/img/logo.jpeg"
        alt="Barakah Bites Logo"
        style={{ height: "55px" }}
      />
      <Link to="" className="logo-text">
          Barakah Bites
        </Link>
</header>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Reduce Food Waste. Feed Communities.</h1>
          <p className="hero-subtitle">
            Connecting dining halls with food banks and charities to eliminate food waste.
          </p>
          <a href="/Form" className="cta-button">
            Order Form
          </a>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="impact-section">
      <section className="impact-section"> </section>
        <div className="impact-item">
          <h3>200+ Pounds of food</h3>
          <p>
            Wasted in Syracuse dining halls everyday.
          </p>
        </div>
        <div className="impact-item">
          <h3>15 Charities</h3>
          <p>Partnering with local food banks and charitable organizations.</p>
        </div>
        <div className="impact-item">
          <h3>17 Dining Halls</h3>
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
        <p>© 2024 Bakarah Bites. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
