import './styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import FormQuote from '../../components/form-quote';
import ReviewSlider from '../../components/reviews/Review';
import AreaServed from '../../components/area-served';
import { useEffect } from 'react';

export default function Gutter(){
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
            <div className="first-block-gutter">
                <button onClick={scrollToQuoteForm}>GET A QUOTE</button>
            </div>
            <div className='second-block'>
                <h1>GUTTER CLEANING & GUARD INSTALLATION</h1>
                <h2>Say goodbye to clogged gutters! We offer top-notch gutter guard installation and cleaning. Prevent costly damage and keep your home safe. Get a quote today for hassle-free maintenance!</h2>
                <h3>#GutterGuard #HomeProtection</h3>
            </div>
            <div className='slider-container'>
            <Slider {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/gg2after1.png' alt='gutter-img01'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/gg2after2.png' alt='gutter-img02'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/gg2before1.png' alt='gutter-img03'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/gg2before2.png' alt='gutter-img04'/>
                </div>
            </Slider>
            <Slider {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/after (20).png' alt='gutter-img05'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/gg3after1.png' alt='gutter-img06'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/gg3before1.png' alt='gutter-img07'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/gg1after1.png' alt='gutter-img08'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/gg1before1a.png' alt='gutter-img09'/>
                </div>
            </Slider>
            <Slider {...sliderSettings}>
                <div className='gallery-container'>
                    <img src='/assets/after (24).png' alt='gutter-img10'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/after (25).png' alt='gutter-img11'/>
                </div>
                <div className='gallery-container'>
                    <img src='/assets/after (19).png' alt='gutter-img012'/>
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