import "./Different.css"

export function Different() {
    return (
        <div className="differentContainer">
            <h2>We<span></span>re different</h2>
            <div className="flex-desktop">
                <div className="process">
                    <div className="processImg">
                        <img src="./icon-snappy-process.svg" alt="snappy process icon" />
                    </div>
                    <h3>Snappy Process</h3>
                    <p>Our application process can be completed in minutes, not
                        hours. Don't get stuck filling in tedious forms.
                    </p>
                </div>
                <div className="prices">
                    <div className="pricesImg">
                        <img src="./icon-affordable-prices.svg" alt="prices icons" />
                    </div>
                    <h3>Affordable Prices</h3>
                    <p>We don't want you worrying about high monthly costs. Our
                        prices may be low, but we still offer the best coverage
                        possible.
                    </p>
                </div>
                <div className="people">
                    <div className="peopleImg">
                        <img src="./icon-people-first.svg" alt="people icon" />
                    </div>
                    <h3>People First</h3>
                    <p>Our plans aren't full of conditions and clauses to prevent
                        payouts. We make sure you're covered when you need it.
                    </p>
                </div>
            </div>

            <div className="findOutContainer">
                <p>Find out more about how we work</p>
                <a>How we work</a>
            </div>
        </div>
    )
}