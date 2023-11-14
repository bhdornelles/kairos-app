import React from 'react';
import Slider from 'react-slick'
import { ReviewProps } from '../../../types'
import './styles.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AiFillStar } from 'react-icons/ai';

interface ReviewSliderProps {
    reviews: ReviewProps[];
}

const ReviewSlider: React.FC<ReviewSliderProps> = () => {
    const starIcons = Array.from({ length: 5 }, (value, index) => (
        <AiFillStar key={index} className="star-rating"/>
        ));

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (window.innerWidth < 768) {
        sliderSettings.slidesToShow = 1;
        sliderSettings.slidesToScroll = 1;
    } else if (window.innerWidth < 1200) {
        sliderSettings.slidesToShow = 2;
        sliderSettings.slidesToScroll = 2;
    } else {
        sliderSettings.slidesToShow = 3;
        sliderSettings.slidesToScroll = 3;
    }

    return (
        <div className='review-container'>
            <h2>Customer Reviews</h2>
            <Slider {...sliderSettings}>
                <div className='review-block'>
                    <h2>John F.</h2>
                    <h3>The entire process went extremely smooth, We upgraded the entire downstairs floor + stairs Everything looks beautiful!! I would recommend 100%</h3>
                    <div className='star-container'>
                        {starIcons}
                    </div>
                </div>
                <div className='review-block'>
                    <h2>Victor B.</h2>
                    <h3>He made a conscious effort to leave the area he was working in better shape than he found it. I will be calling him again!</h3>
                    <div className='star-container'>
                        {starIcons}
                    </div>
                </div>
                <div className='review-block'>
                    <h2>Allan A.</h2>
                    <h3>Awesome customer service, I was very satisfied with their work. Efficient and very well done. </h3>
                    <div className='star-container'>
                        {starIcons}
                    </div>
                </div>
                <div className='review-block'>
                    <h2>Kelsey P.</h2>
                    <h3>I'm thrilled with the gutter guard service I received! They cleaned my gutters and installed guards, keeping my home debris-free. Efficient, professional, and a game-changer for maintenance. Highly recommended!</h3>
                    <div className='star-container'>
                        {starIcons}
                    </div>
                </div>
                <div className='review-block'>
                    <h2>Hannah A.</h2>
                    <h3>Exceptional painting service! They transformed two rooms and my cabinets beautifully. The attention to detail and skill were outstanding.</h3>
                    <div className='star-container'>
                        {starIcons}
                    </div>
                </div>
                <div className='review-block'>
                    <h2>Daniel S.</h2>
                    <h3>Super effective and fast. Highly recommend. </h3>
                    <div className='star-container'>
                        {starIcons}
                    </div>
                </div>
      </Slider>
    </div>
  );
};

export default ReviewSlider;