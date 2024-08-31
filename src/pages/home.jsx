import React from "react";
import Image from 'next/image'; // Import the Image component

const Home = () => {
    return (
        <>
            <div className="first_section"></div>
            <section className="first_section home" >
                <div className="home_text">
                    <div className="home_text_heading">
                        <h1>The most intelligent program for you</h1>
                    </div>
                    <div className="home_text_and_button">
                        <p>ProgressAI is an innovative fitness tracking app that helps users to take their fitness goals. With its minimalist interface, ProgressAI offers customized workout plans, progress tracking, and AI driven insights to help you reach your fitness goals.</p>
                        <button className="btn" onClick={() => window.location.href='/sign-up'}>Try For Free</button>
                    </div>
                </div>
                <div className="home_image">
                    <Image src="" alt="" />
                </div>
            </section>
        </>
    );
};

export default Home;