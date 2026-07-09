import Banner from "./component/Banner";
import FAQ from "./component/FAQ";
import FeaturesDesigns from "./component/FeaturesDesigns";
import MarqueeComponent from "./component/Marquee";

export default function Home() {
  return (
    <div>
    <MarqueeComponent/>
    <Banner/>
    <FeaturesDesigns/>
    <FAQ/>
    
    </div>
  );
}
