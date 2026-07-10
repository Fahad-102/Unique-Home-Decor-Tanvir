import Banner from "./component/Banner";
import FAQ from "./component/FAQ";
import FeaturesDesigns from "./component/FeaturesDesigns";
import FeaturesDesignsHeadline from "./component/FeaturesDesignsHeadline";
import MarqueeComponent from "./component/Marquee";
import ShopMap from "./component/ShopMap";
import Welcome from "./component/Welcome";

export default function Home() {
  return (
    <div>
    <MarqueeComponent/>
    <Welcome/>
    <Banner/>
    <FeaturesDesignsHeadline/>
    <FeaturesDesigns/>
    <FAQ/>
    
    </div>
  );
}
