import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container text-[#ffffff] h-[600px] w-[500px] bg-[#e5e5e5]">
      <Slider {...settings}>
        <div className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[500px]"/>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1711330980173-f308124e153d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[100%] " alt="" />
        </div>
        
      </Slider>
    </div>
  );
}

// export default SimpleSlider;