import HeroProductCard from "./HeroProductCard";
import sunglasses1 from "../assets/sunglasses-1.webp";

import "../styles/HeroProducts.css";
import useWindowSize from "../hooks/useWindowSize";

export default function HeroProducts() {
  const [width, _] = useWindowSize();

  const lg = width > 992;
  return (
    <div className="block opacity-1 overflow-hidden -z-30 absolute top-0 bottom-0 left-0 right-0">
      <div className="tilted-products">
        <div className="flex-horizontal">
          <div className="overflow-hidden flex items-start justify-center flex-1 w-full h-full relative">
            <div className="track-vertical-alt">
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="green"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="orange"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="rose"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="cyan"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="green"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="orange"
              />
            </div>
          </div>
          <div className="overflow-hidden flex items-start justify-center flex-1 w-full h-full relative">
            <div className="track-vertical">
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="orange"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="rose"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="cyan"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="green"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="orange"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="rose"
              />
            </div>
          </div>
          <div className="overflow-hidden flex items-start justify-center flex-1 w-full h-full relative">
            <div className="track-vertical-alt">
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="rose"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="cyan"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="green"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="orange"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="rose"
              />
              <HeroProductCard
                title="Golden Sunglasses"
                src={sunglasses1.src}
                price={129.5}
                compareAtPrice={159.5}
                color="cyan"
              />
            </div>
          </div>
          {lg && <div className="overflow-hidden flex items-start justify-center flex-1 w-full h-full relative">
            <div className="track-vertical">
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}
