import PropTypes from "prop-types";
import { UserData } from "../../Context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
export const Header = ({ tag = "h2", title, subtitle }) => {
  const { userId, test } = useParams();
  const { user } = useContext(UserData);
  return (
    <header>
      {tag === "h1" ? <h1>{title}</h1> : <h2>{title}</h2>}
      <p>
        {userId}/{test}
      </p>
      <div className="flex flex-between gp-md">
        <p>{subtitle}</p>
        {user !== null && user !== undefined ? (
          <div className="user-validate">
            <p>
              logged in as:{" "}
              {typeof user === "string"
                ? JSON.parse(user).username
                : user.username}
            </p>
          </div>
        ) : null}
      </div>
    </header>
  );
};
Header.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  user: PropTypes.string,
};
