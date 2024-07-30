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
                            <p className="price">$9</p>
                        </div>
                        <small className="per_month">per month</small>
                        <div className="price_card_line"></div>
                        <ul className="price_feature_list">
                            <li className="price_feature">✓ Feature</li>
                            <li className="price_feature">✓ Feature</li>
                            <li className="last_price_feature price_feature">✓ Feature</li>
                        </ul>
                        <button>Get Started</button>
                    </div>
                    <div className="price_card" id="price_card_2">
                        <h2>Popular</h2>
                        <div className="price_discount">
                            <p className="price original_price">$60</p>
                            <p className="price">$19</p>
                        </div>
                        <small className="per_month">per month</small>
                        <div className="price_card_line"></div>
                        <ul className="price_feature_list">
                            <li className="price_feature">✓ Feature</li>
                            <li className="price_feature">✓ Feature</li>
                            <li className="price_feature">✓ Feature</li>
                            <li className="price_feature">✓ Feature</li>
                            <li className="last_price_feature price_feature">✓ Feature</li>
                        </ul>
                        <button>Get Started</button>
                    </div>
                    <div className="price_card">
                        <h2>Premium</h2>
                        <div className="price_discount">
                            <p className="price">$79</p>
                        </div>
                        <small className="per_month">per month</small>
                        <div className="price_card_line"></div>
                        <ul className="price_feature_list">
                            <li className="price_feature">✓ Feature</li>
                            <li className="price_feature">✓ Feature</li>
                            <li className="price_feature">✓ Feature</li>
                            <li className="price_feature">✓ Feature</li>
                            <li className="price_feature">✓ Feature</li>
                            <li className="last_price_feature price_feature">✓ Feature</li>
                        </ul>
                        <button>Get Started</button>
                    </div>
                </div>
            </section>
        </>
    );
}; 

export default Pricing;