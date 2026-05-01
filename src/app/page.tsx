import HeroSection from "../components/HeroSection";
import ScrollingBrands from "../components/ScrollingBrands";
import DesignDirectory from "../components/DesignDirectory";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollingBrands />
      <div id="designs">
        <DesignDirectory />
      </div>
    </>
  );
}
