import "./Footer.css"

export function Footer() {
    return (
        <footer>
            <div className="footerContainer">

                <div className="footerTop">

                    <div className="footerLogoImg">
                        <img src="./logo.svg" alt="logo" />
                    </div>

                    <div className="footerSocialMedia">
                        <div className="face">
                            <i className="fa-brands fa-square-facebook"></i>
                        </div>
                        <div className="twitter">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="pinterest">
                            <i className="fa-brands fa-pinterest"></i>
                        </div>
                        <div className="insta">
                            <i className="fa-brands fa-instagram"></i>
                        </div>

                    </div>

                </div>

                <div className="footerBottom">
                    <div className="optionsFooter">

                        <div className="ourCompany">
                            <p>Our Company</p>
                            <ul>
                                <li>How we work</li>
                                <li>Why Insure?</li>
                                <li>Check Price</li>
                                <li>Reviews</li>
                            </ul>
                        </div>

                        <div className="helpMe">
                            <p>Help Me</p>
                            <ul>
                                <li>FAQ</li>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Cookies</li>
                            </ul>
                        </div>

                        <div className="contact">
                            <p>Contact</p>
                            <ul>
                                <li>Sales</li>
                                <li>Support</li>
                                <li>Live Chat</li>
                            </ul>
                        </div>

                        <div className="others">
                            <p>Others</p>
                            <ul>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>Licenses</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </footer>
    )
}