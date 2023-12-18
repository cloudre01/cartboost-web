export default function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="text-xl font-bold mb-4">CartBoost</h5>
          <p className="text-gray-400">
            Enhancing online shopping experiences with cutting-edge technology.
          </p>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Product</h5>
          <ul className="space-y-2">
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                Integrations
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                API
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Company</h5>
          <ul className="space-y-2">
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4">Resources</h5>
          <ul className="space-y-2">
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                Documentation
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                Support
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">© 2023 CartBoost. All rights reserved.</p>
      </div>
    </footer>
  );
}
