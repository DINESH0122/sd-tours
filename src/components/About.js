import React from 'react'
import aboutImg from '../images/about.jpeg'
import Title from './Title'

const About = () => {
    return (
        <section className="section" id="about">
            <Title title='about' subTitle='us' />
            <div className="section-center about-center">
                <div className="about-img">
                    <img
                        src={aboutImg}
                        className="about-photo"
                        alt="awesome beach"
                    />
                </div>
                <article className="about-info">
                    <h3>explore the difference</h3>
                    <p>
                        Explore offers extraordinary journeys that go beyond the ordinary.
                        With meticulous planning and personalized attention, our passionate
                        team curates immersive tours that blend culture, landscapes, and
                        unforgettable experiences. Join us to unlock a world of discovery
                        and create lifelong memories.
                    </p>
                    <p>
                        At Explore, we redefine travel. Our curated journeys blend culture,
                        landscapes, and unforgettable experiences. We prioritize responsible
                        travel, leaving a positive impact. Join us to unlock the extraordinary
                        and explore the world with a fresh perspective.
                    </p>
                    <a rel="noreferrer" href="#about" className="btn">read more</a>
                </article>
            </div>
        </section>
    )
}

export default About