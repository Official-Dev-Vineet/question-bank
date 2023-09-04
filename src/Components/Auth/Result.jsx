import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { questionBankOfGithub } from "../../../Constant";
import { questionBankOfLinux } from "../../../Constant";
import { questionBankOfReact } from "../../../Constant";
import { questionBankOfUiUx } from "../../../Constant";
import { SvgCircle } from "../../Utils/SvgCircle";
export const Result = () => {
  const [questionBank, setQuestionBank] = useState([]);
  const { userId, test } = useParams();
  const navigate = useNavigate();
  const attemptedQuestion = JSON.parse(
    localStorage.getItem("attemptedQuestion")
  );
  const [score, setScore] = useState(0);
  const [isGet, setIsGet] = useState(false);
  const calculateResult = async () => {
    await attemptedQuestion.map((item, index) => {
      if (item.select === questionBank[index]["answer"]) {
        setScore((pre) => pre + 1);
        document.title = `Result  of ${test} test : ${score}`;
      }
    });
    setIsGet(true);
    localStorage.removeItem("attemptedQuestion");
  };
  useEffect(() => {
    if (!userId && !test) {
      navigate("/auth", { replace: true });
    }
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
    document.title = `Result  of ${test} test : Not Generated`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section>
      <h2 style={{ textAlign: "center" }}>
        Result of {test} test : {score} out of {questionBank.length}
        <button
          onClick={() => calculateResult()}
          className={isGet ? "btn disabled" : "btn"}
          disabled={isGet}
        >
          {isGet ? "Result Generated" : "Get Result"}
        </button>
      </h2>

      {isGet && (
        <>
          <SvgCircle
            data={score}
            total={questionBank.length}
            text={((score / questionBank.length) * 100).toFixed(2)}
          />
          <div className="group" style={{ marginTop: "20px" }}>
            <Link to={`/auth`}>Go to DashBoard</Link>
          </div>
        </>
      )}
    </section>
  );
};
