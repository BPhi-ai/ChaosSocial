import "./login.css";

export default function login() {
  return (
    <div className= "login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">ChaosSocial</h3>
            <span className="loginDescription">Connect with friends and the world around you on ChaosSocial.</span>
        </div>
        <div className="loginRight">
            <div className="loginBox"> 
              <input placeholder="Email" className="loginInput"/>
              <input placeholder="Password" className="loginInput"/>
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}