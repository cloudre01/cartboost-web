import Button from "./Button";
import Newsletter from "./Newsletter";

export default function Integration() {
  return (
    <div className="bg-[#f8fafc] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Built for Shopify & Shopify Plus
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Seamlessly integrate with your Shopify store.
            <br />
            No code required, easily customizable.
          </p>
          <div className="mt-8">
            <Button disabled title="Coming Soon"></Button>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
