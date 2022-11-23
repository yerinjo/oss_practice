/* eslint-disable react/button-has-type */
import './login.css';

const Signup = () => (
  <div className="form signup">
    <div className="form-header">
      <div className="show-signup">Sign Up</div>
      <div className="show-signin">Sign In</div>
    </div>
    <div className="arrow" />
    <div className="form-elements">
      <div className="form-element">
        <input type="email" placeholder="Email" />
      </div>
      <div className="form-element">
        <input type="text" placeholder="User ID" />
      </div>
      <div className="form-element">
        <input type="password" placeholder="Password" />
      </div>
      <div className="form-element">
        <input type="password" placeholder="Confirm password" />
      </div>
      <div className="form-element">
        <button id="submit-btn">Sign Up</button>
      </div>
    </div>
  </div>
);

export default Signup;
