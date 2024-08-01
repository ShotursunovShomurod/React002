import React from 'react'
import "../Clean/Clean.scss"
import cleanImg from '../asset/clean.png'


const Clean = () => {
    return (
        <>
            <div className="clean">
                <div className="container">
                    <div className="clean__wrapper">
                    <div className='clean__content'>
                        <div className='clean__top'>
                            <h2 className='clean__suptitle'>Clean and fragrant soy wax</h2>
                            <p className='clean__greentext'>Made for your home and for your wellness</p>
                        </div>
                        <div className='clean__context'>
                            <span className='clean__title'>Eco-sustainable:All recyclable materials, 0% CO2 emissions</span>
                            <span className='clean__title'>Hyphoallergenic: 100% natural, human friendly ingredients </span>
                            <span className='clean__title'>Handmade: All candles are craftly made with love.</span>
                            <span className='clean__title'>Long burning: No more waste. Created for last long.</span>
                        </div>
                        <div className='clean_btn'>
                            <button className='clean__button'>Learn more</button>
                        </div>
                    </div>
                    <div className='clean__img'>
                        <img src={cleanImg} alt="" />
                    </div>
                    </div>
             
                </div>
            </div>
        </>
    )
}

export default Clean