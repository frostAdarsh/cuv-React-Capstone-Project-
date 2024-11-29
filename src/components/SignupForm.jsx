import { useState } from "react";
export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    userName: "",
    termsAndConditions: false,
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    mobile: false,
    userName: false,
    termsAndConditions: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, userName, termsAndConditions } = formData;
    setError({
      name: false,
      email: false,
      mobile: false,
      userName: false,
      termsAndConditions: false,
    }); // reset error state
    if (name.trim().length === 0) {
      //
      setError((prevState) => {
        return { ...prevState, name: true };
      });
    }
    if (email.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, email: true };
      });
    }
    if (mobile.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, mobile: true };
      });
    }
    if (userName.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, userName: true };
      });
    }
    if (termsAndConditions === false) {
      setError((prevState) => {
        return { ...prevState, termsAndConditions: true };
      });
    }
  };
  return (
    <div className="formcontainer">
      <h1 className="heading">Super app</h1>
      <p className="intropara">Create your new account</p>
      <form className="formdisplay" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          className="inputbox"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
        {error.name && <p className="errorstyle">Field is required</p>}
        <input
          placeholder="Username"
          type="text"
          className="inputbox"
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
          value={formData.userName}
        />
        {error.userName && <p className="errorstyle">Field is required</p>}
        <input
          placeholder="Email"
          type="text"
          className="inputbox"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        {error.email && <p className="errorstyle">Field is required</p>}
        <input
          placeholder="Mobile"
          type="text"
          className="inputbox"
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          value={formData.mobile}
        />
        {error.mobile && <p className="errorstyle">Field is required</p>}

        <div className="checkboxcontiner">
          <input
            id="checkbox"
            type="checkbox"
            onChange={(e) =>
              setFormData({ ...formData, termsAndConditions: e.target.checked })
            }
            checked={formData.termsAndConditions}
          />
          <label htmlFor="checkbox" className="checkboxdisplay">
            <p>Share my registration data with Superapp</p>
          </label>
        </div>
        {error.termsAndConditions && (
          <p className="errorstyle">Check this box if you want to proceed</p>
        )}
        <button className="signupbtn" type="submit">
          SIGN UP
        </button>
      </form>
      <div className="textdown">
        <p>
          By clicking on Sign up. you agree to Superapp
          <span className="textgreen">Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp
          <span className="textgreen">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
