import FormQuote from '../../components/form-quote';
import ReviewSlider from '../../components/reviews/Review';
import './styles.css';

export default function QuotePage() {
    return(
        <div className='page-container'>
            <div className='quote-block'>
                <h1>FREE ESTIMATES</h1>
                <h2>At Kairos Improvement LLC, we offer FREE estimates and affordable prices on our services. Your requests for quotes are met with quick responses, and we're just a call away or a form submission below. <br/><br/>Explore our wide range of services, from flooring installation and repair, to interior and exterior painting, pressure washing, and gutter cleaning and guard installation. Our dedicated teams ensure your project's success.</h2>
            </div>
            <div className='component-container'>
            <FormQuote />
            <ReviewSlider reviews={[]} />
            </div>
        </div>
    )
}

// CHECK THE ISSUE WITH CLASSNAME THAT IF A NAME ON CLASSNAME IS EQUAL TO OTHER PAGE
// WILL PULL THAT CLASSNAME ATTRIBUTES FROM THAT OTHER PAGE!!