import PropTypes from "prop-types";
import { memo } from "react";
// eslint-disable-next-line react-refresh/only-export-components
const AttemptedQuestion = ({ questions, activeState }) => {
 

  const answerToggler = (e) => {
    document.querySelectorAll(".answer").forEach((item) => {
      item.classList.remove("show");
      e.currentTarget.querySelector(".answer").classList.add("show");
    });
    setTimeout(() => {
      document.querySelectorAll(".answer").forEach((item) => {
        item.classList.remove("show");
      });
    }, 3000);
  };
  return (
    <aside className={activeState ? "active" : ""}>
      <div className="sidebar-item">
        <h2 style={{ textAlign: "center" }}>Attempted</h2>
        {questions.length > 0 ? (
          <ul className="attempted-question">
            {questions.map((item, index) => {
              return (
                <li key={index} onClick={(e) => answerToggler(e)}>
                  <span>
                    {index + 1}. {item.question}
                  </span>
                  <span className={`answer`}>
                    You answered: <strong> {item.select}</strong>
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            {" "}
            No Question Attempted{" "}
          </p>
        )}
      </div>
    </aside>
  );
};

AttemptedQuestion.propTypes = {
  questions: PropTypes.array.isRequired,
  activeState: PropTypes.bool.isRequired,
};
const exportAtt=memo(AttemptedQuestion);
export default exportAtt