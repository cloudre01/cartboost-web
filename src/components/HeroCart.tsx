import { useEffect } from "react";
import { X, Minus, Plus, Tag, Trash, ChevronDown } from "react-feather";
import { useAnimate, type AnimationSequence } from "framer-motion";

import paymentIcon from "../assets/payment-icons.webp";
import sunglasses from "../assets/sunglasses.webp";
import shoe from "../assets/shoe.webp";
import "../styles/HeroCart.css";

const sequence: AnimationSequence = [
  [
    ".cart-background",
    {
      transform:
        "perspective(1000px) rotateY(-30deg) rotateX(10deg) translateX(20px)",
    },
    {
      duration: 0.8,
    },
  ],
];

export default function HeroCart() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(sequence);
  }, []);

  return (
    <div ref={scope}>
      <div className="flex flex-col -z-10 absolute top-0 right-0 cart-background bg-white rounded-sm h-full">
        <div className="flex flex-col text-gray-800">
          <div className="flex justify-between items-center border-b border-black/10 p-6 pb-6">
            <h2 className="font-bold text-2xl">Cart • 5</h2>
            <div>
              <X />
            </div>
          </div>

          <div className="flex flex-col flex-grow cart-body py-4 bg-teal-400 border-t border-t-teal-500 border-b border-b-teal-500 cart-announcement">
            <div className="text-center text-base">
              <p className="text-gray-800">
                Your products are reserved for{" "}
                <span className="text-red-500">4 minutes 39 seconds!</span>
              </p>
            </div>
          </div>
          <div className="py-4 px-1">
            <img src={paymentIcon.src} alt="payment icons" />
          </div>
          <div className="text-base text-center px-5 py-2">
            <div>
              <p>You’re $50 away from free shipping!</p>
            </div>
            <div className="bg-slate-700 rounded-2xl h-3 overflow-hidden w-full">
              <div className="block bg-teal-500 overflow-hidden transition-all ease-in-out duration-500 w-2/3 h-full"></div>
            </div>
          </div>
          <div className="relative py-5 px-5 border-b border-b-black/10">
            <div className="flex flex-wrap -mt-5 -ml-5 items-stretch">
              <div className="ml-5 mt-5 max-w-full">
                <div className="flex justify-start h-auto text-center w-20 overflow-hidden">
                  <img src={sunglasses.src} alt="sunglasses" />
                </div>
              </div>
              <div className="ml-5 mt-5 max-w-full flex-1">
                <div className="flex justify-between mb-3">
                  <div>
                    <h3 className="text-base p-0 text-left mr-3 break-words">
                      Sunglasses
                    </h3>
                    <div className="text-base opacity-40">
                      <span>black</span>
                    </div>
                  </div>

                  <div className="items-center rounded-sm cursor-pointer flex justify-center transition duration-200">
                    <Trash className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex -mt-5 -ml-5 flex-nowrap items-center justify-between">
                  <div className="ml-5 mt-5 max-w-full">
                    <div className="bg-white p-0">
                      <div className="flex items-center">
                        <button className="flex justify-center max-h-7 min-h-7 p-0 text-center transition duration-200 items-center bg-white border border-slate-200 text-black cursor-pointer h-7 w-7 hover:opacity-75 rounded-bl-sm rounded-tl-sm">
                          <Minus className="h-3" />
                        </button>
                        <input
                          type="number"
                          disabled
                          className="bg-white border border-slate-200 border-l-0 border-r-0 text-black text-sm h-7 m-0 max-h-7 min-h-7 p-0 text-center w-11"
                          value="1"
                        />
                        <button className="items-center bg-white border border-slate-200 text-black flex cursor-pointer h-7 justify-center max-h-7 min-h-7 p-0 text-center transition duration-200 w-7 hover:opacity-75 rounded-br-sm rounded-tr-sm">
                          <Plus className="h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="ml-5 mt-5 max-w-full">
                    <div className="flex flex-col gap-2 text-right items-end item-price">
                      <div className="flex gap-2 justify-end">
                        <span className="ml-0 line-through text-gray-300">
                          $99.90
                        </span>
                        <span className="font-semibold">$79.90</span>
                      </div>

                      <div className="flex gap-2 justify-end">
                        <span className="text-green-500 font-extrabold">
                          Save (%20)
                        </span>
                      </div>

                      <div className="flex gap-2 justify-end">
                        <div className="inline-flex items-center bg-black/5 rounded-sm text-gray-600 font-bold ml-2 pl-2 pr-0.5 pt-1 pb-1.5 align-middle cursor-pointer">
                          <div className="flex items-center justify-center">
                            <Tag className="stroke-gray-600 h-4 w-4" />
                          </div>
                          <span className="uppercase mx-1 text-sm">
                            holiday
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center cursor gap-2 w-fit">
              <p>Add special instructions</p>
              <ChevronDown />
            </div>
          </div>
          <div className="px-6 py-4">
            <h2 className="text-center px-7 mb-4">You'll love these items!</h2>
            <div className="relative w-full box-border">
              <div className="overflow-hidden">
                <ul className="relative w-full list-none touch-pan-y overflow-hidden m-0 p-0 whitespace-nowrap flex flex-nowrap will-change-transform">
                  <li className="w-full h-full flex-shrink-0 whitespace-normal select-none">
                    <div className="overflow-hidden p-4 relative bg-slate-200">
                      <div className="items-stretch flex flex-nowrap -ml-5 -mt-5">
                        <div className="ml-5 mt-5 max-w-full">
                          <div className="items-center bg-slate-300 flex h-24 w-24 justify-center">
                            <img
                              src={shoe.src}
                              alt="a shoe"
                              className="h-24 w-auto"
                            />
                          </div>
                        </div>

                        <div className="ml-5 mt-5 max-w-full flex-1">
                          <div className="flex items-start flex-col mb-2">
                            <h3 className="block text-base font-semibold mb-1 mt-0 overflow-hidden text-ellipsis whitespace-nowrap w-full">
                              Shoe
                            </h3>
                            <span className="font-medium text-base">
                              <span className="opacity-60 line-through text-xs mr-2">
                                $129.90
                              </span>
                              <span>$99.90</span>
                            </span>
                          </div>

                          <div className="flex justify-between">
                            <div className="h-9 max-h-9 pr-2 relative w-1/2">
                              <select
                                disabled
                                name="productVariant"
                                className="bg-white border border-slate-200 rounded-none cursor-pointer text-sm h-9 max-h-9 outline-none pr-5 pl-2 w-full"
                              >
                                <option value="green">green</option>
                                <option value="red">red</option>
                              </select>
                            </div>
                            <div className="flex-grow flex-shrink w-full input-wrapper">
                              <input
                                type="submit"
                                disabled
                                className="bg-black border-0 rounded-none text-white cursor-pointer text-base font-semibold h-9 m-0 max-h-9 py-2 px-4 w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="select-none">
                <button className="select-none arrow arrow--left"></button>
                <button className="select-none arrow arrow--right"></button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="bg-slate-200 border-t border-t-black/10 p-6">
            <div className="mb-2">
              <div className="flex gap-2 w-full">
                <div className="items-center bg-white border border-black/10 flex justify-center relative w-full">
                  <input
                    type="text"
                    disabled
                    name="discount_code"
                    placeholder="Discount code"
                    className="bg-white border-none rounded-none text-black flex-1 text-base h-11 m-0 px-4 relative w-full"
                  />
                </div>

                <button className="px-6 m-0 font-semibold bg-black text-white transition duration-200 hover:opacity-75 hover:text-slate-100">
                  Apply
                </button>
              </div>
            </div>

            <div className="items-center flex justify-between pb-3">
              <div className="saving-codes flex flex-row relative gap-1">
                <span>Discounts</span>
                <div className="sliding-code overflow-x-scroll whitespace-nowrap">
                  <div className="items-center bg-black/5 rounded-sm text-slate-200 inline-flex font-semibold ml-2 py-1 px-4 cursor-pointer">
                    <div className="flex items-center justify-center">
                      <Tag className="w-4 h-4 stroke-gray-600" />
                    </div>
                    <span className="text-gray-600 mx-1 uppercase">
                      Holiday
                    </span>
                  </div>
                </div>
              </div>

              <span>- $20.00</span>
            </div>

            <div className="mb-0 text-center">
              <button className="cursor-pointer bg-black block text-base font-semibold text-white transition duration-300 hover:opacity-85 max-w-full p-4 w-full">
                Checkout • $79.90
              </button>
            </div>
            <div className="items-center flex font-base justify-center padding px-2">
              <div className="border-none cursor-pointer mt-4">
                Continue Shopping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
