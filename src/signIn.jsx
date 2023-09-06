import "/Users/apple/Documents/notes-app/src/signIn.css";
import Navbar from "/Users/apple/Documents/notes-app/src/Navbar.jsx";

const SignIn = () => {
  return (
    <div className="SignIn">
      <Navbar />
      <div className="signIn-container">
        <div className="grid-container">
          <div className="grid-item1">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email..."
            />
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
            />
            <br />
            <br />
            <button type="submit">Submit</button>

            <ul className="signUp-page">
              <li>
                <a href="#">Forgot Password?</a>
              </li>
              <li>
                Need an Account? <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="grid-item2">hlo</div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
