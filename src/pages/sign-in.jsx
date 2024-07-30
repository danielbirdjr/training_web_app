import React from "react";

const SignIn = () => {
    return (
        <>
            <div className="first_section"></div>
            <section className="signin_page">
                <div className="signin_frame">
                    <div className="signin_container">
                        <div className="signin_title">
                            <h1>Sign In</h1>
                            <p>Sign in to access your account</p>
                        </div>
                        <div className="signin_fields">
                            <input type="email" id="signin-email" placeholder="Email" />
                            <input type="password" id="signin-password" placeholder="Password" />
                            <button id="signin-button">Sign In</button>
                        </div>
                        <div className="forgot_password_container">
                            <p><a href="/forgot-password.html">Forgot password?</a></p>
                        </div>
                        <div className="line"></div>
                        <div className="signup_container_bottom">
                            <p>Don't have an account yet?</p>
                            <button onClick={() => window.location.href='/sign-up'}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignIn;