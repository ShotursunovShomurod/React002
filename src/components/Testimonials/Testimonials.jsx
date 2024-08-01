import React from "react";
import "../Testimonials/Testimonials.scss";

function Testimonials() {
  return (
    <div className="Testomonials">
      <div className="Testomonials__wrapper">
        <div className="container">
          <div className="Testomonials__suptitle">
            <p className="testomonials">Testomonials</p>
            <p className="Some">Some quotes from our happy customers</p>
          </div>
          <div className="Testomonials__block">
            <div className="Testomonials__card">
                <div className="Testomonials__img">
                    <img className="Testo__img" src="/bg.png" alt="" />
                </div>
                <div className="Testomonials__stars">
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 5.png" alt="" />
                </div>
                <div className="Teastomonials__content">
                    <p className="fresheners">“I love it! No more air fresheners”</p>
                    <p className="Teastomonials__name">Luisa</p>
                </div>
            </div>
            <div className="Testomonials__card">
                <div className="Testomonials__img">
                    <img className="Testo__img" src="/bg.png" alt="" />
                </div>
                <div className="Testomonials__stars">
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 5.png" alt="" />
                </div>
                <div className="Teastomonials__content">
                    <p className="fresheners">“I love it! No more air fresheners”</p>
                    <p className="Teastomonials__name">Luisa</p>
                </div>
            </div>
            <div className="Testomonials__card">
                <div className="Testomonials__img">
                    <img className="Testo__img" src="/bg.png" alt="" />
                </div>
                <div className="Testomonials__stars">
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 2.png" alt="" />
                    <img src="/Star 5.png" alt="" />
                </div>
                <div className="Teastomonials__content">
                    <p className="fresheners">“I love it! No more air fresheners”</p>
                    <p className="Teastomonials__name">Luisa</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
