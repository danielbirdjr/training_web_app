import React from "react";

const About = () => {
    return (
        <>
            <div className="first_section"></div>
            <section classNameName="about">
                <div className="about_section_framer">
                    <div className="about_section_image">
                        <img src="usapl_competition_photo_2.jpg" alt="Photo of Daniel Bird" />
                    </div>
                    <div className="about_section_text">
                        <h4 className="first_h4">Who's behind this?</h4>
                        <h2>Hey, I'm Daniel Bird</h2>
                        <p>I am the creator of ProgressAI. As a Computer Science student with over 7 years of gym training, including competing in powerlifting and training bodybuilding and boxing, I developed this app to merge my passions for fitness and technology.</p>

                        <h4>Why ProgressAI?</h4>
                        <p>For years, I struggled to find a tool to manage my training. Spreadsheets handled calculations and tracking but were annoying during workouts. Fitness apps lacked customization, had cluttered interfaces, or poor programming. ProgressAI was created to address these issues. My goal was to merge customized tracking with the convenience of a user-friendly app. With ProgressAI, you can easily track progress, create personalized workout programs, leverage AI for program design and optimization, and receive AI-powered coaching.</p>

                        <h4>Why AI?</h4>
                        <p>Artificial Intelligence is the core of ProgressAI, offering users the benefits of a personal coach at a fraction of the cost. Our AI not only creates custom programs but also continuously optimizes your training based on crucial variables: workout intensity, training volume, sleep quality, nutrition, and stress. By analyzing these factors, ProgressAI delivers a truly personalized fitness experience, adapting to your needs and helping you achieve your goals more effectively.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;