import { useContext, useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { UserData } from "../../../Context";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const { user, setUser } = useContext(UserData);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: crypto.randomUUID(),
    username: "",
    userage: "",
    useraddress: "",
    usercity: "",
    userstate: "",
    usercountry: "",
    userpincode: "",
    useremail: "",
    userphone: "",
  });
  const [error, setError] = useState(null);
  const handler = (e) => {
    e.preventDefault();
    const validate = validateFields();
    validate ? fillInfo() : setError("Please fill all fields");
    validate ? setError(null) : null;
    validate ? navigate(`/auth/${userInfo.userId}`) : null;
  };
  const fillInfo = async () => {
    setUserInfo({ ...userInfo });
    localStorage.setItem("userData", JSON.stringify(userInfo));
    await setUser(JSON.stringify(userInfo));
  };
  const validateFields = () => {
    if (
      userInfo.username &&
      userInfo.userage &&
      userInfo.useraddress &&
      userInfo.usercity &&
      userInfo.userstate &&
      userInfo.usercountry &&
      userInfo.userpincode &&
      userInfo.useremail &&
      userInfo.userphone
    )
      return true;
  };
  // autofill previous value
  useEffect(() => {
    user !== null && user !== undefined ? setUserInfo(typeof user === "string" ? JSON.parse(user) : user) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="user">
      <div className="disclaimer">
        {user !== null && user !== undefined ? (
          <>
            <h2>
              {" "}
              Welcome :{" "}
              {typeof user === "string"
                ? JSON.parse(user).username
                : user.username}
            </h2>
            <p>Edit details or Keep Continue</p>
          </>
        ) : (
          <>
            <h2> User Details</h2>
            <p>Please fill all the details</p>
          </>
        )}
      </div>
      <div className="user-form">
        <form
          id="user-form"
          name="user-form"
          autoComplete="on"
          autoSave="on"
          onSubmit={(e) => handler(e)}
        >
          <fieldset>
            <legend>
              <h3>
                <span className="icon">
                  <BsPersonCircle />
                </span>
                <span className="text">Personal Details</span>
              </h3>
            </legend>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                autoFocus="on"
                id="name"
                autoComplete="on"
                value={userInfo.username || ""}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, username: e.target.value })
                }
              />
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                value={userInfo.userage || ""}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, userage: e.target.value })
                }
              />
              <label htmlFor="address">Street Address</label>
              <input
                type="text"
                id="address"
                autoComplete="on"
                value={userInfo.useraddress || ""}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, useraddress: e.target.value })
                }
              />
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={userInfo.usercity || ""}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, usercity: e.target.value })
                }
              />
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                value={userInfo.userstate || ""}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, userstate: e.target.value })
                }
              />
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={userInfo.usercountry || ""}
                autoComplete="on"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, usercountry: e.target.value })
                }
              />
              <label htmlFor="pincode">Pincode</label>
              <input
                type="number"
                id="pincode"
                value={userInfo.userpincode || ""}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, userpincode: e.target.value })
                }
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>
                <span className="icon">
                  <MdContactPhone />
                </span>
                <span className="text">Contact Details</span>
              </h3>
            </legend>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={userInfo.useremail || ""}
                autoComplete="on"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, useremail: e.target.value })
                }
              />
              <label htmlFor="phone">Phone No.</label>
              <input
                type="tel"
                id="phone"
                autoComplete="on"
                value={parseInt(userInfo.userphone) || ""}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, userphone: e.target.value })
                }
              />
              {error ? <p>{error}</p> : null}

              <button type="submit" className="btn">
                {user !== null && user !== undefined ? "Update" : "Submit"}
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
