import { useEffect } from "react";
import { useAnimate, type AnimationSequence } from "framer-motion";
import Button from "./Button";

const sequence: AnimationSequence = [
  ["h2", { transform: "translateY(0%)", opacity: 1 }, { duration: 0.4 }],
  ["h3", { transform: "translateY(0%)", opacity: 1 }, { duration: 0.4 }],
  [
    "div.button",
    { transform: "translateY(0%)", opacity: 1 },
    { duration: 0.4 },
  ],
  [
    "p",
    { transform: "translateY(0%) scale(1.3)", opacity: 1 },
    { duration: 0.4 },
  ],
  ["p", { transform: "scale(1)" }],
];

export default function HeroTitle() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(sequence);
  }, []);

  return (
    <div className="text-white text-center px-4 mr-2 md:mr-0 md:px-0" ref={scope}>
      <div className="overflow-hidden">
        <h2 className="text-6xl leading-snug font-bold mb-6 opacity-0 translate-y-full">
          Elevate your <span className="text-7xl text-blue-600">AOV</span> <br/> <span className="italic">&</span>{" "}
          shopping experience
        </h2>
      </div>
      <div className="overflow-hidden">
        <h3 className="text-2xl mb-8 opacity-0 translate-y-full">
          CartBoost helps businesss like yours to reach new heights
          effordlessly.
        </h3>
      </div>
      <div className="overflow-hidden mb-1">
        <div className="button translate-y-full opacity-0">
          <Button title="Coming Soon" disabled/>
        </div>
      </div>
      <div className="over-hidden">
        <p className="text-slate-200/60 opacity-0 translate-y-full">
          it's free!
        </p>
      </div>
    </div>
  );
}
