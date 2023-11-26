import './styles.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import FormQuote from '../../components/form-quote';
import ReviewSlider from '../../components/reviews/Review';
import AreaServed from '../../components/area-served';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Flooring(){
    useEffect(() => {
        ScrollReveal().reveal('.slider-block', {
            delay: 60,
            distance: '20px',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            origin: 'bottom',
            reset: false,
            scale: 1,
            viewFactor: 0.5,
        })
      }, [])
      
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

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
                <h3>VALID UNTIL DECEMBER 24TH 2023</h3>
            </div>
            <div className='second-block'>
                <h1>FLOORING</h1>
                <h2>Transform your space with our premier flooring service — expert installation, seamless repair, and a wide range of options including laminate, hardwood, carpet, vinyl, and tile. Elevate your home today!</h2>
                <h3>30% OFF ON FLOORING SERVICES</h3>
            </div>
            <div className='slider-container'>
            <Slider className='slider-block' {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/03after.png' alt='floor-gallery01'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/03before.png' alt='floor-gallery02'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/01after.png' alt='floor-gallery08'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/01before.png' alt='floor-gallery09'/>
                </div>
            </Slider>
            <Slider className='slider-block' {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/05after.png' alt='floor-gallery03'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/05before.png' alt='floor-gallery04'/>
                </div>
            </Slider>
            <Slider className='slider-block' {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/02after.png' alt='floor-gallery05'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/02after1.png' alt='floor-gallery06'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/02before.png' alt='floor-gallery07'/>
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
                <ReviewSlider reviews={[]} />
                <AreaServed />
            </div>
        </div>
    )
}