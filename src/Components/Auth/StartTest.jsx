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
    window.addEventListener("blur", () => {
      setIsStarted(false);
     ()=> alert("you can't change your window or browser tab while test is running");
      navigate(`/`, { replace: true });
    });
    document.title = `Test of ${test}`;
    document.body.oncontextmenu = () => false;
    window.addEventListener("keydown", function (e) {
      e.preventDefault();
      return false;
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
    }
    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsSelected(false);
    }
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
      navigate(`/result/result-for-${userId}/${test}`, { replace: true });
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
        <div
          className="flex flex-between gap-md"
          style={{ padding: "10px 20px" }}
        >
          <h2 style={{ marginBlockEnd: "10px" }}>
            {isStarted ? (
              <>
                Question {currentQuestion + 1} of {questionBank.length}
              </>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  setIsStarted(true);
                  setTimeLeft(questionBank.length * 60);
                }}
              >
                Start Test
              </button>
            )}
          </h2>
          {isStarted ? <>Time Left : {formatTime(timeLeft)}</> : null}
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
