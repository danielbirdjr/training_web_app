import React from "react";

const SignUp = () => {
    return (
        <>
            <div className="first_section"></div>
            <section class="signup_page">
                <div class="signup_frame">
                    <div class="signup_container">
                        <div class="signup_title">
                            <h1>Sign Up</h1>
                            <p>Create your account</p>
                        </div>
                        <div class="signup_fields">
                            <input type="text" id="signup-first-name" placeholder="First Name" />
                            <input type="text" id="signup-last-name" placeholder="Last Name" />
                            <input type="email" id="signup-email" placeholder="Email" />
                            <input type="password" id="signup-password" placeholder="Password" />
                            <input type="password" id="signup-confirm-password" placeholder="Confirm Password" />
                            <p>Must be 8 characters min.</p>
                            <div class="terms_and_conditions">
                                <input type="checkbox" class="terms_and_conditions_checkbox" />
                                <p>I agree to the <a href="">terms and conditions</a> and <a href="">privacy policy</a></p>
                            </div>
                            <button id="signup-button">Countinue</button>
                        </div>
                        <div class="signup_line"></div>
                        <div class="signup_container_bottom">
                            <p>Already have an account?</p>
                            <button onClick={() => window.location.href='/sign-in'}>Sign In</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;