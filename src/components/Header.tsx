import { useState } from "react"
import "./Header.css"
import { useMediaQuery } from "react-responsive"


export function Header() {

    const responsiveImg = useMediaQuery({ maxWidth: 900 })

    const [isMobile, setIsMobile] = useState(false)

    const toggleMenu = () => {
        setIsMobile(!isMobile)
    }

    return (
        <div className="headerContainer">
            <header>

                <nav>

                    <div className="logo">
                        <img src="./logo.svg" alt="logo" />
                    </div>

                    <div id="menuOptions"
                        className={`menuOptions ${isMobile ? "active" : ""}`} >
                        <ul className="listOptions">
                            <li className="listLink">How we work</li>
                            <li className="listLink">Blog</li>
                            <li className="listLink">Account</li>
                            <li className="listLink border">View Plans</li>
                        </ul>
                    </div>

                    <div id="menu" onClick={toggleMenu} >
                        <i className={`fa-solid  ${isMobile ? "fa-x" : "fa-bars"}`}></i>
                    </div>

                </nav>

            </header>

            <div className="msContainer">

                {responsiveImg ? (
                    <div className="msImgMobile">
                        <img src="./image-intro-mobile.jpg" alt="intro family" />
                    </div>
                ) : (
                    <div className="msImgDesktop">
                        <img src="./image-intro-desktop.jpg" alt="intro family" />
                    </div>
                )}

                <div className="textMs">
                    <h1 className="titleMs">Humanizing your insurance.</h1>
                    <p className="pMs">Get your life insurance coverage easier and faster.
                        We blend our expertise and technology to help you find
                        the plan that's right for you. Ensure you and your loved
                        ones are protected.
                    </p>
                    <a className="linkMs">View Plans</a>
                </div>

            </div>
        </div>
    )
}