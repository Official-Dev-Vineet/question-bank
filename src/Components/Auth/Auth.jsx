import { useContext, useEffect, useState } from "react";
import { UserData } from "../../../Context";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Auth = () => {
  const { user } = useContext(UserData);
  const [selectedTest, setSelectedTest] = useState("");
  const { userId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId || !user) {
      navigate(`/user`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Data for userId : {userId}</h2>
      <div className="flex-wrap-item">
        {user !== null &&
          user !== undefined &&
          Object.keys(typeof user === "string" ? JSON.parse(user) : user)
            .filter((key) => key !== "userId")
            .map((key, index) => {
              return (
                <div className="item-group" key={index}>
                  <h3>{key.replace("user", "")}</h3>
                  <p
                    title={
                      typeof user === "string"
                        ? JSON.parse(user)[key]
                        : user[key]
                    }
                  >
                    {typeof user === "string"
                      ? JSON.parse(user)[key]
                      : user[key]}
                  </p>
                </div>
              );
            })}
      </div>
      <div className="link-group">
        <Link to="/user" className="btn">
          Edit
        </Link>
      </div>
      <div className="link-group">
        choose Your Test :{" "}
        <select onChange={(e) => setSelectedTest(e.target.value)}>
          <option selected disabled>--select--</option>
          <option value={"React"}>React</option>
          <option value={"Github"}>Github</option>
          <option value={"UiUx"}>UI-UX</option>
          <option value={"Linux"}>Linux</option>
        </select>
      </div>
      {selectedTest !== "" && (
        <div className="link-group">
          <Link to={`/start-test/${userId}/${selectedTest}`} className="btn">
            Start Test
          </Link>
        </div>
      )}
    </section>
  );
};
