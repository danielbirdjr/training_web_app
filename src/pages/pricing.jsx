import React from "react";

const Pricing = () => {
    return (
        <>
            <div className="first_section"></div>
            <section className="pricing_section">
                <h1>Choose Your Plan</h1>
                <div className="pricing_container">

                    <div className="price_card">
                        <h2>Basic</h2>
                        <div className="price_discount">
                            <p className="price original_price">$9</p>
                            <p className="price">Free</p>
                        </div>
                        <small className="per_month">per month</small>
                        <div className="price_card_line"></div>
                        <ul className="price_feature_list">
                            <li className="price_feature">✓&nbsp; Track workouts & see progress</li>
                            <li className="price_feature">✓&nbsp; Create custom programs</li>
                            <li className="price_feature">✓&nbsp; Weight, reps, and RPE entry</li>
                            <li className="last_price_feature price_feature">✓&nbsp; Use calculations in program</li>
                        </ul>
                        <button onClick={() => window.location.href='/sign-up'}>Get Started</button>
                    </div>
                    <div className="price_card" id="price_card_2">
                        <h2>Pro</h2>
                        <div className="price_discount">
                            {/* <p className="price original_price">$60</p> */}
                            <p className="price">Coming Soon</p>
                        </div>
                        <small className="per_month">per month</small>
                        <div className="price_card_line"></div>
                        <ul className="price_feature_list">
                            <li className="price_feature">✓&nbsp; All Basic features</li>
                            <li className="price_feature">✓&nbsp; AI-based progress optimization</li>
                            <li className="last_price_feature price_feature">✓&nbsp; Store videos & progress photos</li>
                        </ul>
                        <button onClick={() => alert('Coming Soon!')}>Coming Soon</button>
                    </div>
                    <div className="price_card">
                        <h2>Premium</h2>
                        <div className="price_discount">
                            <p className="price">Coming Soon</p>
                        </div>
                        <small className="per_month">per month</small>
                        <div className="price_card_line"></div>
                        <ul className="price_feature_list">
                            <li className="price_feature">✓&nbsp; All Pro features</li>
                            <li className="last_price_feature price_feature">✓&nbsp; Coaches can view clients progress & manage programs</li>
                        </ul>
                        <button onClick={() => alert('Coming Soon!')}>Coming Soon</button>
                    </div>
                </div>
            </section>
        </>
    );
}; 

export default Pricing;