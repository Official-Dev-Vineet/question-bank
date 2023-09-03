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
  const [isSelected, setIsSelected] = useState(false);
  const [timeLeft, setTimeLeft] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { userId, test } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    !userId ? navigate(`/`, { replace: true }) : null;
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
    document.oncontextmenu = () => false;
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        nextQuestionHandler();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const nextQuestionHandler = () => {
    if (currentQuestion < questionBank.length) {
      setAttemptedQuestion([
        ...attemptedQuestion,
        {
          question: questionBank[currentQuestion].question,
          select: selectedAnswer,
        },
      ]);
      setIsSelected(false);
    }
    navigate(`/result/result-for-${userId}/${test}`, { replace: true });
  };
  if (currentQuestion < questionBank.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    localStorage.setItem(
      "attemptedQuestion",
      JSON.stringify(attemptedQuestion)
    );
  }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStarted]);
  return (
    <main>
      <AttemptedQuestion questions={attemptedQuestion} />
      <div className="question-container">
        <div className="flex flex-between gap-md">
          <h2 style={{ marginBlockEnd: "10px" }}>
            {isStarted ? (
              <>
                Question {currentQuestion + 1} of {questionBank.length}
              </>
            ) : null}
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
              {currentQuestion + 1}. {questionBank[currentQuestion]?.question}
            </h3>
            <ul className="">
              {questionBank[currentQuestion]?.option.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="option"
                    onClick={() => {
                      setSelectedAnswer(item);
                      setIsSelected(true);
                    }}
                  >
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
            <button
              onClick={() => nextQuestionHandler()}
              disabled={!isSelected}
              className={!isSelected ? "btn disabled" : "btn"}
            >
              {currentQuestion === questionBank.length - 1 ? "Finish" : "Next"}
            </button>
          </>
        )}
      </div>
    </main>
  );
};
