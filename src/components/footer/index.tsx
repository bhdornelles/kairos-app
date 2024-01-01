import './styles.css';

import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export default function Footer() {
    const handleInstagramClick = () => {
        window.location.href = 'https://instagram.com/kairosimprove'
    }

    const handleFacebookClick = () => {
        window.location.href = 'https://www.facebook.com/profile.php?id=100083482665518&mibextid=LQQJ4d'
    }

    const phoneNumber = '+19804940420';
    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
     }

     const handleMailClick = () => {
        const email = 'kairosimprovement@gmail.com';
        window.location.href = `mailto:${email}`;
     }

    return (
        <div className='footer-container'>
            <div className='logo-company'>
                <img src='/assets/logo-kairos.png' alt='logo-footer'/>
                <h3>PA — NJ — DE — MD</h3>
            </div>
            <div className='contact-container'>
                <h2>Office Location</h2>
                <h3>100 N 20th St, Suite 410 <br/>Philadelphia, PA <br/>19103</h3>
            </div>
            <div className='phone-email'>
                <h2>Contact Info</h2>
                <div onClick={handleCallClick} className='phone'>
                    <AiOutlinePhone />
                    <h3>980-494-0420</h3>
                </div>
                <div onClick={handleMailClick} className='email'>
                    <AiOutlineMail />
                    <h3>kairosimprovement@gmail.com</h3>
                </div>
                <div className='social-medias'>
                    <AiOutlineInstagram onClick={handleInstagramClick}/>
                    <AiOutlineFacebook onClick={handleFacebookClick} />
                </div>
            </div>
        </div>
    )
}