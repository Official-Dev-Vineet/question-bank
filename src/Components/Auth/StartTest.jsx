import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./start-test.css";
import AttemptedQuestion from "./AttemptedQuestion";
import { questionBankOfGithub } from "../../../Constant";
import { questionBankOfLinux } from "../../../Constant";
import { questionBankOfReact } from "../../../Constant";
import { questionBankOfUiUx } from "../../../Constant";
import { GiHamburgerMenu } from "react-icons/gi";
export const StartTest = () => {
  const [isActive, setIsActive] = useState(false);
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
    !userId
      ? navigate(
          `/`,
          {
            replace: true,
          },
          { state: { msg: `failed test for ${test} due to invalid activity` } }
        )
      : null;
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
      navigate(`/failed test for ${test} due to invalid activity`, {
        replace: true,
      });
    });
    document.title = `Test of ${test}`;
    document.body.oncontextmenu = () => false;
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        setIsStarted(false);
        navigate(`/`, { replace: true });
      }
      if (e.keyCode === 91 || e.key === "Meta") {
        e.preventDefault();
      }
      if (e.key === "Fn") {
        e.preventDefault();
      }
      if (e.key === "F12") {
        e.preventDefault();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const nextQuestionHandler = () => {
    setIsSelected(false);
    setSelectedAnswer("");
    if (currentQuestion < questionBank.length) {
      setAttemptedQuestion([
        ...attemptedQuestion,
        {
          question: questionBank[currentQuestion].question,
          select: selectedAnswer,
        },
      ]);
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  useEffect(() => {
    isStarted && currentQuestion === questionBank.length && goToResultHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);
  const goToResultHandler = () => {
    setIsStarted(false);
    localStorage.setItem(
      "attemptedQuestion",
      JSON.stringify(attemptedQuestion)
    );
    navigate(`/result/result-for:${userId}/${test}`, { replace: true });
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds =
      secondsRemaining < 10 ? `0${secondsRemaining}` : `${secondsRemaining}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  const timer = useMemo(() => {
    return formatTime(timeLeft);
  }, [timeLeft]);
  useEffect(() => {
    if (timeLeft <= 0) {
      localStorage.setItem(
        "attemptedQuestion",
        JSON.stringify(attemptedQuestion)
      );
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
  }, [isStarted, timeLeft]);
  return (
    <main>
      <AttemptedQuestion questions={attemptedQuestion} activeState={isActive} />
      <div
        className={`bar ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <GiHamburgerMenu />
      </div>
      <div className="question-container">
        <div
          className="flex flex-between gap-md"
          style={{ padding: "10px 20px" }}
        >
          <h2
            style={{
              margin:"2.5px 10px",
            }}
          >
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
          {isStarted ? <>Time Left : {timer}</> : null}
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
                    className={`option ${
                      selectedAnswer === item ? "selected" : ""
                    }`}
                    onClick={() => {
                      setSelectedAnswer(item);
                      setIsSelected(true);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => nextQuestionHandler()}
              disabled={!isSelected}
              className={!isSelected ? "btn disabled" : "btn"}
            >
              Next
            </button>
          </>
        )}
      </div>
    </main>
  );
};
