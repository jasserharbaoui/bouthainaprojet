import React from "react";
import './css/loginSignup.css'

const LoginSingUp =()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsingup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login"> Already have an account <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>by continuing ,i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}


export default LoginSingUp;