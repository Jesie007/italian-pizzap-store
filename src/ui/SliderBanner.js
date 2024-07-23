import React from 'react';
import Slider from 'react-slick';
import slide1 from "../image-1.jpg"
import slide5 from "../image-5.jpg"
import slide3 from "../image-3.jpg"




const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      imgPath: slide1,
      alt: 'Slide 1',
    },
    {
      id: 2,
      imgPath:slide5,
      alt: 'Slide 2',
    },
    {
      id: 3,
      imgPath: slide3,
      alt: 'Slide 3',
    },
   
  ];

  return (
    <div className="slider-banner mx-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.imgPath} alt={slide.alt} style={{ width: '100%' }} className='rounded-lg object-cover shadow-lg scale-y-95'/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBanner;
