import PropTypes from "prop-types";
export const AttemptedQuestion = ({ question }) => {
  console.log(question);
  return (
    <aside>
      <h2 style={{textAlign: "center"}}>Attempted</h2>
      <ul className="attempted-question">
        {question.map((item, index) => {
          return <li key={index} className="option">{index+1}. {item.question} </li>;
        })}
      </ul>
    </aside>
  );
};

AttemptedQuestion.propTypes = {
  question: PropTypes.array.isRequired,
};
