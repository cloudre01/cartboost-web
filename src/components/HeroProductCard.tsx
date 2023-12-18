interface HeroProductCardProps {
  src: string;
  title: string;
  price: number;
  compareAtPrice: number;
  color: "green" | "orange" | "rose" | "cyan";
}

const buttonColor = {
  green: "bg-green-500",
  orange: "bg-orange-500",
  rose: "bg-rose-500",
  cyan: "bg-cyan-500",
};

export default function HeroProductCard({
  src,
  title,
  price,
  compareAtPrice,
  color,
}: HeroProductCardProps) {
  const savings = Math.round((price - compareAtPrice) / price);
  return (
    <div className="product-card h-full bg-white rounded-lg mb-8">
      <div className="flex flex-col p-4 gap-4">
        <img
          className="h-80 w-80 rounded-lg"
          src={src}
          alt="golden sunglasses"
        />
        <div className="font-bold text-black">{title}</div>
        <div className="flex flex-row gap-2 items-center">
          <span className="text-sm text-slate-500 line-through">
            ${compareAtPrice}
          </span>
          <span className="text-base text-black/95 font-semibold">
            ${price}
          </span>
          <span className="text-green-400 font-semibold">
            (Save {savings}%)
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <button
            className={`py-2 rounded-md text-white ${buttonColor[color]}`}
          >
            Add to Cart • ${price}
          </button>
        </div>
      </div>
    </div>
  );
}
