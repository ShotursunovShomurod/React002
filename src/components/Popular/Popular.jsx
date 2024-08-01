import React from 'react'
import "../Popular/Popular.scss"
import rasm from '../asset/image 1.png'
import rasm2 from '../asset/image 2.png'

const data = [
    {
        id: 1,
        url: rasm,
        title: "Spiced Mint",
        price: 9.99
    },
    {
        id: 2,
        url: rasm2,
        title: "Sweet Straweberry",
        price: "9.99 $"
    },
    {
        id: 3,
        url: rasm,
        title: "Cool Blueberries",
        price: 9.99
    },
    {
        id: 4,
        url: rasm2,
        title: "Juicy Lemon",
        price: "9.99 $"
    }
]

const Popular = () => {
    return(
        <div className="Popular">
        <div className="container">
          <div className="Popular__wrapper">
            <div className="Popular__head">
              <h3 className="Popular__suptitle">Products</h3>
              <p className="Popular__subtitle">
                Order it for you or for your beloved ones{" "}
              </p>
            </div>
            <div className="Popular__block">
              {data?.map((el) => (
                <div key={el.id} className="Popular__card">
                  <div className="images">
                    <img className="Popular__img" src={el.url} alt="" />
                  </div>
                  <p>{el.title}</p>
                  <span>{el.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}


export default Popular