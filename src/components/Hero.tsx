import HeroTitle from "./HeroTitle";
import HeroProducts from "./HeroProducts";
import HeroCart from "./HeroCart";

import "../styles/Hero.css"

export default function Hero() {
  return (
    <div className="h-screen flex flex-col relative items-stretch justify-center overflow-hidden home-hero">
      <HeroTitle />
      <HeroCart />
      <HeroProducts />
    </div>
  );
}
