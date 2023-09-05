import { useEffect } from "react";
import hero from "../Assets/hero.png";
import { Link, useParams } from "react-router-dom";

export const Lander = () => {
  const { msg } = useParams();
  const userClear = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("attemptedQuestion");
    alert(msg)
    window.location.href = "/";
  };
  useEffect(() => {
    msg !== undefined && msg !== null && msg !== "" ? userClear() : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <p>
            This system is designed by Vineet Singh to help you to score or
            improve your skills
          </p>
        </div>
        <Link to="/user" className="btn">
          Get Started
        </Link>
      </section>
    </>
  );
};
