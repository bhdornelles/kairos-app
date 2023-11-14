import { useNavigate } from 'react-router-dom';
import './styles.css'
import FormQuote from '../../components/form-quote';
import ReviewSlider from '../../components/reviews/Review';
import AreaServed from '../../components/area-served';

export default function Home() {
    const reviews = [
        {
            name: 'John F.',
            rating: 5,
            text: 'The entire process went extremely smooth, We upgraded the entire downstairs floor + stairs Everything looks beautiful!! I would recommend 100%'
        },
        {
            name: 'Victor B.',
            rating: 5,
            text: 'Kairos improvements was my handyman for a couple of hours. He was very polite, courteous, and professional. I had a small job for my backyard and another related issue I needed taken care of which he was able to accomplish in a timely manner. He made a conscious effort to leave the area he was working in better shape than he found it. I will be calling him again!'
        }
    ]

    const navigate = useNavigate();
    const scrollToQuoteForm = () => {
        const quoteForm = document.getElementById('quote-form-below');
        if (quoteForm) {
            quoteForm.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='homepage-container'>
            <div className='centered-content'>
                <div className='text-image'>
                    <h2>From small to large renovations.</h2>
                    <h3>30% OFF ON FLOORING SERVICES <br/>UNTIL DECEMBER 24TH 2023</h3>
                </div>
                <div className='button-main-container'>
                    <button className="btn-get-quote" onClick={scrollToQuoteForm}>GET A QUOTE NOW</button>
                </div>
            </div>
            <div className='weprovide-container'>
                <h1>
                    About Kairos Improvement LLC
                </h1>
                <h3>
                    With over a decade of experience in residential and commercial renovations we tackle projects from minor repairs to large-scale home remodeling. Fully licensed, insured, and committed to excellence, we deliver outstanding results with a skilled team.
                </h3>
                <h2 className='licensed-insured'>100% Licensed & Insured</h2>
                <h4>PA - MD - DE - NJ</h4>
            </div>
            <ReviewSlider reviews={reviews} />
            <div className='title-services'>
                <h1>Our Services</h1>
            </div>
            <div className='services-block'>
                <div className='img-services'>
                    <img src='/assets/floring-img.jpg' alt='flooring-img' />
                    <div className='text-services'>
                        <h2>Flooring Installation & Repair</h2>
                        <h3>Elevate your space with expert flooring installation and repair. We handle hardwoods, laminates, and more for floors and stairs. Your home's perfect foundation.</h3>
                        <h4>Get an online or in-person quote today.</h4>
                        <button onClick={() => navigate('/flooring')}>SEE MORE</button>
                    </div>
                </div>
                <div className='img-services'>
                    <img src='/assets/painting-kairos.jpeg' alt='painting-img'/>
                    <div className='text-services'>
                        <h2>Painting & Drywall</h2>
                        <h3>Experience professional painting and drywall services that transform your space. Our skilled team brings precision, quality, and a fresh perspective to your walls, ensuring a seamless finish that enhances your home or business.</h3>
                        <h4>Get an online or in-person quote today.</h4>
                        <button onClick={() => navigate('/painting')} >SEE MORE</button>
                    </div>
                </div>
                <div className='img-services'>
                    <img src='/assets/gutter-guard-installing.jpg' alt='gutter-img' />
                    <div className='text-services'>
                        <h2>Gutter Guard & Cleaning</h2>
                        <h3>Discover unmatched protection and cleanliness with our professional gutter guard installation and cleaning services. We shield your property from debris and maintain pristine gutters, ensuring worry-free drainage and safeguarding your investment.</h3>
                        <h4>Get an online or in-person quote today.</h4>
                        <button onClick={() => navigate('/gutter')}>SEE MORE</button>
                    </div>
                </div>
                <div className='img-services'>
                    <img src='/assets/Power-Washing-Service.webp' alt='pressurewashing-img'/>
                    <div className='text-services'>
                        <h2>Pressure Washing</h2>
                        <h3>Revitalize your surfaces with our professional pressure washing service. Restore the beauty of your home or business exteriors, driveways, and decks. Our high-pressure cleaning experts remove grime and stains, leaving your property looking fresh and inviting.</h3>
                        <h4>Get an online or in-person quote today.</h4>
                        <button id='quote-form-below' onClick={() => navigate('/pressurewashing')}>SEE MORE</button>
                    </div>
                </div>
            </div>
            <FormQuote />
            <AreaServed />
        </div>
    )
}