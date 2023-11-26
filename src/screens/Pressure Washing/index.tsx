import './styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import FormQuote from '../../components/form-quote';
import ReviewSlider from '../../components/reviews/Review';
import AreaServed from '../../components/area-served';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function PressureWashing(){
    useEffect(() => {
        ScrollReveal().reveal('.slider-block', {
            delay: 150,
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
            <div className="first-block">
                <button onClick={scrollToQuoteForm}>GET A QUOTE</button>
            </div>
            <div className='second-block'>
                <h1>PRESSURE WASHING</h1>
                <h2>Revive your property's beauty with our expert pressure washing. Remove grime, stains, and years of wear with our high-pressure cleaning. Reveal the pristine and inviting side of your home or business. Get your free quote today!</h2>
                <h3>Make it new. Again.</h3>
            </div>
            <div className='slider-container'>
            <Slider className='slider-block' {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/pw05after.png' alt='pressure-img01'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw05before.png' alt='pressure-img02'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw08after.png' alt='pressure-img03'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw08before.png' alt='pressure-img04'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw06after.png' alt='pressure-img05'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw06before.png' alt='pressure-img06'/>
                </div>
            </Slider>
            <Slider className='slider-block' {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/before (1).png' alt='pressure-img07'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/before.png' alt='pressure-img08'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw01after.png' alt='pressure-img09'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw01before.png' alt='pressure-img10'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw02after.png' alt='pressure-img11'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw02before.png' alt='pressure-img12'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw03after.png' alt='pressure-img13'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw03before.png' alt='pressure-img14'/>
                </div>
            </Slider>
            <Slider className='slider-block' {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/pw10after.png' alt='pressure-img15'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw10before.png' alt='pressure-img16'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw04after.png' alt='pressure-img17'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw04before.png' alt='pressure-img18'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw07after.png' alt='pressure-img19'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/pw07before.png' alt='pressure-img20'/>
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