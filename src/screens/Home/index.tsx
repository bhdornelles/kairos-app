import { useNavigate } from 'react-router-dom';
import './styles.css'
import FormQuote from '../../components/form-quote';
import ReviewSlider from '../../components/reviews/Review';
import AreaServed from '../../components/area-served';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Home() {
    const navigate = useNavigate();
    const formQuoteRef = useRef<HTMLDivElement | null>(null);

    const scrollToQuoteForm = () => {
        if (formQuoteRef.current) {
            formQuoteRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const services = [
        {
          imgSrc: '/assets/floring-img.jpg',
          title: 'Flooring Installation & Repair',
          description: "Elevate your space with expert flooring installation and repair. We handle hardwoods, laminates, and more for floors and stairs. Your home's perfect foundation.",
          route: '/flooring',
        },
        {
          imgSrc: '/assets/painting-kairos.jpeg',
          title: 'Painting & Drywall',
          description: 'Experience professional painting and drywall services that transform your space. Our skilled team brings precision, quality, and a fresh perspective to your walls, ensuring a seamless finish that enhances your home or business.',
          route: '/painting',
        },
        {
          imgSrc: '/assets/gutter-guard-installing.jpg',
          title: 'Gutter Guard & Cleaning',
          description: 'Discover unmatched protection and cleanliness with our professional gutter guard installation and cleaning services. We shield your property from debris and maintain pristine gutters, ensuring worry-free drainage and safeguarding your investment.',
          route: '/gutter',
        },
        {
          imgSrc: '/assets/Power-Washing-Service.webp',
          title: 'Pressure Washing',
          description: 'Revitalize your surfaces with our professional pressure washing service. Restore the beauty of your home or business exteriors, driveways, and decks. Our high-pressure cleaning experts remove grime and stains, leaving your property looking fresh and inviting.',
          route: '/pressurewashing',
        },
      ];

    useEffect(() => {
        ScrollReveal().reveal('.img-services', {
            delay: 60,
            distance: '20px',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            origin: 'bottom',
            reset: false,
            scale: 1,
            viewFactor: 0.5,
        })
      }, [])

    return (
        <div className='homepage-container'>
            <div className='centered-content'>
                <div className='text-image'>

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
                <h4>PA — MD — DE — NJ</h4>
            </div>
            <ReviewSlider reviews={[]} />
            <div className='title-services'>
                <h1>Our Services</h1>
            </div>
            <div className='services-block'>
                {services.map((service, index) => (
                <div key={index} className='img-services'>
                    <img onClick={() => navigate(service.route)} src={service.imgSrc} alt={`${service.title} img`} />
                    <div className='text-services'>
                    <h2>{service.title}</h2>
                    <h3>{service.description}</h3>
                    <h4>Get an online or in-person quote today.</h4>
                    <button onClick={() => navigate(service.route)}>SEE MORE</button>
                    </div>
                </div>
                ))}
            </div>
            <div className='off-selected-services' ref={formQuoteRef}>
                <h3>30% OFF ON SELECTED SERVICES</h3>
            </div>
            <FormQuote />
            <AreaServed />
        </div>
    )
}