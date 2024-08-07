import 'bootstrap/dist/css/bootstrap.min.css';
import icon1 from '../assets/socialIcons/facebook.webp'
import icon2 from '../assets/socialIcons/share.webp'
import icon3 from '../assets/socialIcons/tik-tok.webp'
import icon4 from '../assets/socialIcons/twitter.webp'
import icon5 from '../assets/socialIcons/youtube.webp'
import icon6 from '../assets/socialIcons/instagram.png'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="mainContainer footer">
                <div className="nestCont1">
                    <div className="nestCont2">
                        <div className="nestCont4">
                            <h1 className='display-8'><strong>TS Collections</strong></h1>
                            <h2><br />Keep up to date</h2>
                            <p>Join our newsletter for regular updates. No spam ever.</p>
                            <div className="inputblock">
                                <input type="text" className="form-control inputArea" placeholder="Username" aria-label="Your email" aria-describedby="basic-addon1" />
                                <button type="button" className="btn footerbtn">Subscribe</button>
                            </div>
                        </div>
                        <div className="nestCont5">
                            <div className="nestCont6">
                                <h3 className="display-8">Explore</h3>
                                <h4 className='links' onClick={() => { }}>Shop now</h4>
                                <h4 className='links' onClick={() => { }}>About us</h4>
                                <h4 className='links' onClick={() => { }}>Contact us</h4>
                            </div>
                            <div className="nestCont6">
                                <h3 className="display-8">Top Catagories</h3>
                                <h4 className='links' onClick={() => { }}>Shoes</h4>
                                <h4 className='links' onClick={() => { }}>Glasses</h4>
                                <h4 className='links' onClick={() => { }}>Jewelry</h4>
                                <h4 className='links' onClick={() => { }}>Mobiles</h4>
                                <h4 className='links' onClick={() => { }}>Makeup</h4>
                                <h4 className='links' onClick={() => { }}>Watches</h4>
                            </div>
                            <div className="nestCont6">
                                <h3 className="display-8">Brands</h3>
                                <h4 className='links' onClick={() => { }}>Samsung</h4>
                                <h4 className='links' onClick={() => { }}>Apple</h4>
                                <h4 className='links' onClick={() => { }}>Audi</h4>
                                <h4 className='links' onClick={() => { }}>Olympics</h4>
                                <h4 className='links' onClick={() => { }}>Honda</h4>
                                <h4 className='links' onClick={() => { }}>Rolex</h4>
                                <h4 className='links' onClick={() => { }}>Ferrari</h4>
                            </div>
                        </div>
                    </div>
                    <div className="nestCont3">
                        <div className="nestCont7">
                            <h5>Copyright &copy; 2024 TS Collection, Pakistan's No 1 online Platform</h5>
                        </div>
                        <div className="nestCont8">
                                <img className='socialIcon' src={icon1} loading='lazy'/>
                                <img className='socialIcon' src={icon2} loading='lazy'/>
                                <img className='socialIcon' src={icon3} loading='lazy'/>
                                <img className='socialIcon' src={icon4} loading='lazy'/>
                                <img className='socialIcon' src={icon5} loading='lazy'/>
                                <img className='socialIcon' src={icon6} loading='lazy'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer