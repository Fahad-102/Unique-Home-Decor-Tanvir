import Banner from "./component/Banner";
import FAQ from "./component/FAQ";
import FeaturesDesigns from "./component/FeaturesDesigns";
import FeaturesDesignsHeadline from "./component/FeaturesDesignsHeadline";
import HeroSection from "./component/HeroSection";
import MarqueeComponent from "./component/Marquee";
import OurPromise from "./component/OurPromise";
import RenovationDetails from "./component/RenovationDetails";
import RenovationGallery from "./component/RenovationGallery";
import RenovationStats from "./component/RenovationStats";
import ShopMap from "./component/ShopMap";
import TrustSection from "./component/TrustSection";
import Welcome from "./component/Welcome";

export default function Home() {
  return (
    <div>
    <MarqueeComponent/>
    <Welcome/>
    <HeroSection/>
    <Banner/>
    <OurPromise/>
    <RenovationStats/>
    <RenovationGallery/>
    <FeaturesDesignsHeadline/>
    <FeaturesDesigns/>
    <RenovationDetails/>
    <TrustSection/>
    <FAQ/>
    <ShopMap/>
    
    </div>
  );
}
