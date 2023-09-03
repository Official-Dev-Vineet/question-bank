import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./start-test.css";
import { AttemptedQuestion } from "./AttemptedQuestion";
import { questionBankOfGithub } from "../../../Constant";
import { questionBankOfLinux } from "../../../Constant";
import { questionBankOfReact } from "../../../Constant";
import { questionBankOfUiUx } from "../../../Constant";

export const StartTest = () => {
  const [attemptedQuestion, setAttemptedQuestion] = useState([]);
  const [questionBank, setQuestionBank] = useState([]);
  const [timeLeft, setTimeLeft] = useState();
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { userId, test } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    !userId ? navigate(`/`) : null;
    setQuestionBank(
      test === "Github"
        ? questionBankOfGithub
        : test === "UiUx"
        ? questionBankOfUiUx
        : test === "Linux"
        ? questionBankOfLinux
        : test === "React"
        ? questionBankOfReact
        : []
    );
    document.title = `Test of ${test}`;
  }, []);
  const nextQuestionHandler = () => {
    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    setAttemptedQuestion([...attemptedQuestion, questionBank[currentQuestion]]);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds =
      secondsRemaining < 10 ? `0${secondsRemaining}` : `${secondsRemaining}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  useEffect(() => {
    if (timeLeft <= 0) {
      // Timer has reached zero, you can perform any action here
      alert("Timer expired!");
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [timeLeft]);
  return (
    <main>
      <AttemptedQuestion question={attemptedQuestion} />
      <div className="question-container">
        <div className="flex flex-between gap-md">
          <h2 style={{ marginBlockEnd: "10px" }}>
            Question {currentQuestion + 1} of {questionBank.length}
          </h2>
          {isStarted ? (
            <>Time Left : {formatTime(timeLeft)}</>
          ) : (
            <button
              className="btn"
              onClick={() => {
                setIsStarted(true);
                setTimeLeft(questionBank.length * 60);
              }}
            >
              Start
            </button>
          )}
        </div>
        {isStarted && (
          <>
            <h3 className="question">
              {" "}
              {currentQuestion + 1}. {questionBank[currentQuestion]?.question}
            </h3>
            <ul className="">
              {questionBank[currentQuestion]?.option.map((item, index) => {
                return (
                  <li key={index} className="option">
                    <label htmlFor={item}>
                      <input
                        type="radio"
                        name="option"
                        id={item}
                        value={item}
                      />
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
            <button onClick={() => nextQuestionHandler()} className="btn">
              Next
            </button>
          </>
        )}
      </div>
    </main>
  );
};
