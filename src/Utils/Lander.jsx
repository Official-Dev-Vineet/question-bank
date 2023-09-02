import PropTypes from "prop-types";
import hero from "../Assets/hero.png";
import { Link } from "react-router-dom";
export const Lander = ({ children }) => {
  return (
    <>
      <section className="landing-page">
        <div className="image">
          <img src={hero} alt="hero-image" />
        </div>
        <div className="text">
          <h2>
            Get Ready to <span className="theme-text">Score Best</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          {children}
        </div>
        <Link to="/auth">Get Started</Link>
      </section>
    </>
  );
};
Lander.propTypes = {
  children: PropTypes.node,
};
