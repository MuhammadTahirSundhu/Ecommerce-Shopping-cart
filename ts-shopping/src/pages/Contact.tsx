import './Contact.css'
import icon1 from '../assets/socialIcons/facebook.webp'
import icon2 from '..//assets/socialIcons/share.webp'
import icon3 from '..//assets/socialIcons/tik-tok.webp'
import icon4 from '..//assets/socialIcons/twitter.webp'
import icon5 from '..//assets/socialIcons/youtube.webp'
import icon6 from '..//assets/socialIcons/instagram.png'

function Contact() {
    return (
        <>
            <div className="mainCContainer">
                <div className="nestCCont1">
                    <h3>Get in touch</h3>
                    <div className="nestCCont1_1">
                        <div className="nestCCont1_2">
                            <h4>Visit us</h4>
                            <p>Come say hello at our office HQ.</p>
                            <h6>H-11/2 IJP Road, Islamabad , Pakistan</h6>
                        </div>
                        <div className="nestCCont1_2">
                            <h4>Chat to us</h4>
                            <p>Our friendly team is here to help.</p>
                            <h6>TSCollection@gmail.com</h6>
                        </div>
                        <div className="nestCCont1_2">
                            <h4>Call us</h4>
                            <p>Come say hello at our office HQ.</p>
                            <h6>(+92) - 3054967155</h6>
                        </div>
                    </div>
                    <div className="nestCCont1_2">
                        <h4>Social media</h4>
                        <div className="Icons">
                            <img className='socialCIcon' src={icon1} loading='lazy' />
                            <img className='socialCIcon' src={icon2} loading='lazy' />
                            <img className='socialCIcon' src={icon3} loading='lazy' />
                            <img className='socialCIcon' src={icon4} loading='lazy' />
                            <img className='socialCIcon' src={icon5} loading='lazy' />
                            <img className='socialCIcon' src={icon6} loading='lazy' />
                        </div>
                    </div>
                </div>
                <div className="nestCCont2">
                    <form className='formFields'>

                        <div className="row g-2 ">
                            <div className="col-md">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control eachField" id="floatingInput" placeholder="Thomas" />
                                    <label htmlFor="floatingInput">First Name</label>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control eachField" id="floatingInput" placeholder="Charles" />
                                    <label htmlFor="floatingInput">Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-floating mb-3 ">
                            <input type="email" className="form-control eachField" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <input type="password" className="form-control eachField" id="floatingPassword" placeholder="(+92)-111111111)" />
                            <label htmlFor="floatingPassword">Phone No</label>
                        </div>

                        <div className="form-floating ">
                            <textarea className="form-control eachField" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                            <label htmlFor="floatingTextarea2">Message</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label " htmlFor="flexCheckDefault">
                                I'd like to recieve more information about offers, I understand <br/>and agree to the Privacy Policy. 
                            </label>
                        </div>
                        <button type="button" className="btn btn-primary mt-5">Send Message</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact