import './styles.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function AreaServed () {
    useEffect(() => {
        ScrollReveal().reveal('.area-container', {
            delay: 60,
            distance: '20px',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            origin: 'bottom',
            reset: false,
            scale: 1,
            viewFactor: 0.5,
        })
      }, [])

    return(
        <div className="area-container">
            <div className='title-area'>
                <h1>Areas We Proudly Serve</h1>
            </div>
            <div className='img-container'>
                <img src="/assets/area-served-img.png" alt='area-served-img'/>
                <h3>We take pride in serving the areas of <b>Pennsylvania, Maryland, Delaware,</b> and <b>New Jersey</b>. <br/><br/> Count on us for all your renovation and improvement needs.</h3>
            </div>
        </div>
    )
}