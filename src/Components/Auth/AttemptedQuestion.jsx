import PropTypes from "prop-types";
export const AttemptedQuestion = ({ questions }) => {
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
  }
  return (
    <aside>
      <h2 style={{ textAlign: "center" }}>Attempted</h2>
      <ul className="attempted-question">
        {questions.map((item, index) => {
          return (
            <li key={index} onClick={(e)=>answerToggler(e)}>
              <span>
                {index + 1}. {item.question}
              </span>
              <span className={`answer`}>You answered: {item.select}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

AttemptedQuestion.propTypes = {
  questions: PropTypes.array.isRequired,
};
