import { useEffect, useState } from "react";
import { AiTwotoneMail ,AiFillCloseCircle } from "react-icons/ai";

export const Footer = () => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    isShown ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  },[isShown])
  return (
    <footer>
      <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
      <button
        className="btn"
        style={{ marginTop: "20px" }}
        onClick={() => setIsShown(!isShown)}
      >
        Contact Us
      </button>
      {isShown && (
        <div className="popUp">
         <div className="pop-content">
         <h2>Contact Us</h2>
         <hr />
          <p>
            If you&apos;d like to send us some feedback, would like to advertise
            with us or become an author on our blog, you can email us at
          </p>
          <p className="flex center">
            <AiTwotoneMail /> :
            <a href="mailto:officialvineet@yahoo.com" style={{ fontStyle: "italic" }}>
              officialvineet@yahoo.com
            </a>
          </p>
          <p>We read every email and usually reply within one business day.</p>{" "}
          <p>
            <hr />
            <b>
              Please note that due to the high number of inquiries that we
              receive, we can only reply to relevant propositions. Thank you.
            </b>
          </p>
            <AiFillCloseCircle onClick={() => setIsShown(false)} style={{ cursor: "pointer",fontSize: "1.5rem",display: "flex",marginLeft: "auto" }} />
         </div>
        </div>
      )}
    </footer>
  );
};
