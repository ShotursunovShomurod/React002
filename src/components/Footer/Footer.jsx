import React from 'react'
import "../Footer/Footer.scss"

function Footer(){
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <img src="/footer.png" alt="" />
                        <p className='natural'>Your natural candle made for your home and for your wellness.</p>
                    </div>
                    <div className="footer__content">
                        <p className='footer__suptitle'>Discovery</p>
                        <ul className='footer__collection'>
                            <li className='footer__item'>New season</li>
                            <li className='footer__item'>Most searched</li>
                            <li className='footer__item'>Most selled</li>
                        </ul>
                    </div>
                    <div className="footer__content">
                        <p className='footer__suptitle'>Discovery</p>
                        <ul className='footer__collection'>
                            <li className='footer__item'>New season</li>
                            <li className='footer__item'>Most searched</li>
                            <li className='footer__item'>Most selled</li>
                        </ul>
                    </div>
                    <div className="footer__content">
                        <p className='footer__suptitle'>Discovery</p>
                        <ul className='footer__collection'>
                            <li className='footer__item'>New season</li>
                            <li className='footer__item'>Most searched</li>
                            <li className='footer__item'>Most selled</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer