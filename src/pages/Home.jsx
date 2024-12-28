import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HubConnectHero from "../components/Hero"
import MobileApp from "../components/Mobile"
import Newsletter from "../components/NewsLetter"
import PowerfulFeatures from "../components/PowerfulFeatures"
import HowItWorks from "../components/Works"

function Home() {
    return (
        <div>
            <Header />
            <div id="home">
                <HubConnectHero />
            </div>
            <div id="features">
                <Features />
                <PowerfulFeatures />
            </div>
            <div id="how-it-works">
                <HowItWorks />
                <MobileApp />
            </div>
            <div id="newsletter">
                <Newsletter />
            </div>
            <Footer />
        </div>
    )
}

export default Home
