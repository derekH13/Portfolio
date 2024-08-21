import React, { useEffect } from "react";
import './Carousel.css'


const Carousel = () => {

useEffect(() => {

    const logosSlide = document.querySelector(".logos-slide");

     if (logosSlide) {
        const copy = logosSlide.cloneNode(true);
        document.querySelector(".logos")?.appendChild(copy);
    }
}, []);



    return(
        <div>
        <div className="logos">
      <div className="logos-slide">
        <img src="./assets/portfolio/carousel/icon-carousel (1).png" alt="" />
        <img src="./assets/portfolio/carousel/icon-carousel (2).png" alt="" />
        <img src="./assets/portfolio/carousel/icon-carousel (3).png" alt="" />
        <img src="./assets/portfolio/carousel/icon-carousel (4).png" alt="" />
        <img src="./assets/portfolio/carousel/icon-carousel (5).png" alt="" />
        <img src="./assets/portfolio/carousel/icon-carousel (6).png" alt="" />
        <img src="./assets/portfolio/carousel/icon-carousel (7).png" alt="" />
        <img src="./assets/portfolio/carousel/icon-carousel (8).png" alt="" />

      </div>
    </div>

        </div>
    )
}

export default Carousel