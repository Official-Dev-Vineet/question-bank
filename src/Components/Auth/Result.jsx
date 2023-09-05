import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { questionBankOfGithub } from "../../../Constant";
import { questionBankOfLinux } from "../../../Constant";
import { questionBankOfReact } from "../../../Constant";
import { questionBankOfUiUx } from "../../../Constant";
import { SvgCircle } from "../../Utils/SvgCircle";
import { UserData } from "../../../Context";
export const Result = () => {
  const { user } = useContext(UserData);
  const [questionBank, setQuestionBank] = useState([]);
  const { userId, test } = useParams();
  const navigate = useNavigate();
  const attemptedQuestion = JSON.parse(
    localStorage.getItem("attemptedQuestion")
  );
  const [score, setScore] = useState(0);
  const [isGet, setIsGet] = useState(false);
  const calculateResult = async () => {
    attemptedQuestion.length > 0
      ? await attemptedQuestion.map((item, index) => {
          if (item.select === questionBank[index]["answer"]) {
            setScore((pre) => pre + 1);
          }
        })
      : alert("please try again");
    setIsGet(true);
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
    document.title = `Result  of ${test} test `;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="result-page">
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
            <Link to={`/auth/${typeof user === "string" ? JSON.parse(user).userId : user.userId}`}>Go to DashBoard</Link>
          </div>
        </>
      )}
    </section>
  );
};
