import "../Hero/Hero.scss"
import React from 'react'   
const Hero = () => {
    return (
        <>
            <div className="hero__bacgroundImg">
                <div className="container">
                    <div className="hero__wrapper">
                        <div className="hero__contect">
                            <h2 className="hero__suptitle"><span>🌱</span>The nature candle</h2>
                            <p className="hero__text">All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                            <button className="hero__btn">Discovery our collection</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero