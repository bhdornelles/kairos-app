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

export default function Painting(){
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
            <div className="first-block-painting">
                <button onClick={scrollToQuoteForm}>GET A QUOTE</button>
            </div>
            <div className='second-block'>
                <h1>INTERIOR & EXTERIOR PAINTING</h1>
                <h2>Revitalize your space with our comprehensive interior and exterior painting services. Our skilled team will transform your home, bringing your vision to life with a fresh, vibrant palette. We're just a click away.</h2>
                <h3>Satisfaction is guarranted.</h3>
            </div>
            <div className='slider-container'>
            <Slider className='slider-block' {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/after.png' alt='painting-img01'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/after (1).png' alt='painting-img02'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/after (2).png' alt='painting-img03'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/after (4).png' alt='painting-img04'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/after (5).png' alt='painting-img05'/>
                </div>
            </Slider>
            <Slider className='slider-block' {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/after (17).png' alt='painting-img10'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/after (16).png' alt='painting-img11'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/after (9).png' alt='painting-img06'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/after (12).png' alt='painting-img07'/>
                </div>
            </Slider>
            <Slider className='slider-block' {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/after (6).png' alt='painting-img08'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/after (11).png' alt='painting-img09'/>
                </div>
            </Slider>
            </div>
            <div id="quote-form" className='see-more-projects'>
                <h2>See more projects on our Instagram and Facebook:</h2>
                <div className='social-medias'>
                    <AiOutlineInstagram style={{ fontSize: '35px' }} onClick={handleInstagramClick}/>
                    <AiOutlineFacebook style={{ fontSize: '35px' }} onClick={handleFacebookClick} />
                </div>
            </div>
            <div className='components-container'>
                <FormQuote />
                <ReviewSlider reviews={[]} />
                <AreaServed />
            </div>
        </div>
    )
}