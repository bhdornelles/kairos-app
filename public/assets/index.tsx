import './styles.css'
import FormQuote from "../../form-quote";
import ReviewSlider from '../../reviews/ReviewSlider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AreaServed from '../../area-served';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

export default function Flooring(){
    const sliderSettings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (window.innerWidth > 768) {
        sliderSettings.slidesToShow = 2;
        sliderSettings.slidesToScroll = 2;
    }

    const handleInstagramClick = () => {
        window.location.href = 'https://instagram.com/kairosimprove'
    }

    const handleFacebookClick = () => {
        window.location.href = 'https://www.facebook.com/profile.php?id=100083482665518&mibextid=LQQJ4d'
    }

    const scrollToQuoteForm = () => {
        const quoteForm = document.getElementById('quote-form');
        if (quoteForm) {
            quoteForm.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return(
        <div className='page-container'>
            <div className="first-block-floor">
                <button onClick={scrollToQuoteForm}>GET 30% OFF</button>
                <h3>VALID UNTIL DECEMBER 25TH 2023</h3>
            </div>
            <div className='second-block'>
                <h1>FLOORING</h1>
                <h2>Transform your space with our premier flooring service — expert installation, seamless repair, and a wide range of options including laminate, hardwood, carpet, vinyl, and tile. Elevate your home today!</h2>
                <h3>30% OFF ON FLOORING SERVICES*</h3>
            </div>
            <div className='slider-container'>
            <Slider {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='assets/03after.png'/>
                </div>
                <div className='gallery-container'>
                    <img src='assets/03before.png'/>
                </div>
            </Slider>
            <Slider {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='assets/05after.png'/>
                </div>
                <div className='gallery-container'>
                    <img src='assets/05before.png'/>
                </div>
            </Slider>
            <Slider {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='assets/02after.png'/>
                </div>
                <div className='gallery-container'>
                    <img src='assets/02after1.png'/>
                </div>
                <div className='gallery-container'>
                    <img src='assets/02before.png'/>
                </div>
            </Slider>
            <Slider {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='assets/01after.png'/>
                </div>
                <div className='gallery-container'>
                    <img src='assets/01before.png'/>
                </div>
            </Slider>
            </div>
            <div id="quote-form" className='see-more-projects'>
                <h2>See more projects on our Instagram and Facebook:</h2>
                <div className='social-medias'>
                    <AiOutlineInstagram style={{ fontSize: '35px' }} onClick={handleInstagramClick}/>
                    <AiOutlineFacebook style={{ fontSize: '35px' }} onClick={handleFacebookClick} />
                </div>
                <button>ENJOY 30% OFF ON FLOORING SERVICES</button>
            </div>
            <div className='components-container'>
                <FormQuote />
                <ReviewSlider />
                <AreaServed />
            </div>
        </div>
    )
}