import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi() {
  return (
    <div className="mainDiv">
      {/* image div  */}
      <div className="imgDiv"></div>

      {/* form div  */}
      <div className="loginForm">
        <h1>Login to continue</h1>
         <div className="input">
          <input />
          <label>Email</label>
          <input />
          <label>Password</label>
         </div>
        <div className="CheckDiv">
          <div className="checkbox">
            <input type={"checkbox"}/>
            <span>Remember me</span>
          </div>
          <div className="forgpass">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <div className="btn">
          <button>LOGIN</button>
        </div>
        <div className="extra">
          <span>or sign up using</span>
        </div>
        <div className="socialion">
          <img  className="fimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png" width={36} height={36}  ></img>
          <img className="timg" src="https://www.pinclipart.com/picdir/big/20-203122_follow-us-twitter-logo-square-png-clipart.png" width={38} height={38}></img>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));