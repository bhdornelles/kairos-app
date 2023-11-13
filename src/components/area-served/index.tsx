import './styles.css'

export default function AreaServed () {
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