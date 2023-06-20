import React from 'react'
import Title from './Title'
import { tours } from '../data'

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title='featured' subTitle='tours' />
            <div className="section-center featured-center">
                {
                    tours.map((
                        {
                            id,
                            img,
                            date,
                            title,
                            text,
                            country,
                            days,
                            cost,
                            icon,
                        }
                    ) => (
                        <article key={id} className="tour-card">
                            <div className="tour-img-container">
                                <img src={img} className="tour-img" alt="" />
                                <p className="tour-date">{date}</p>
                            </div>
                            <div className="tour-info">
                                <h4>{title}</h4>
                                <p>{text}</p>
                                <div className="tour-footer">
                                    <p>
                                        <span>
                                            <i className={icon}></i>
                                        </span>
                                        {country}
                                    </p>
                                    <p>{days}</p>
                                    <p>{cost}</p>
                                </div>
                            </div>
                        </article>
                    ))
                }

            </div>
        </section>
    )
}

export default Tours