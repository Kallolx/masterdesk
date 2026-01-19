/* Using static SVGs from public/images for social icons */

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white pt-20 pb-10 px-4 md:px-12 w-full relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Side */}
        <div className="md:w-1/3">
          <img src="/logo3.svg" alt="Masterdsk Logo" className="h-10 mb-8" />

          <div className="mb-8">
            <p className="text-gray-400 mb-2">Message on WhatsApp</p>
            <a
              href="https://wa.me/8801883746796"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-2xl font-bold hover:text-green-400 transition-colors"
            >
              <img
                src="/images/whatsapp.svg"
                alt="WhatsApp"
                className="h-8 w-8"
              />
              <span>+8801883-746796</span>
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
            >
              <img
                src="/images/facebook.svg"
                alt="Facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              href="https://wa.me/8801883746796"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition-colors"
            >
              <img
                src="/images/whatsapp.svg"
                alt="WhatsApp"
                className="h-10 w-10"
              />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"
            >
              <img
                src="/images/youtube.svg"
                alt="YouTube"
                className="h-10 w-10"
              />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 transition-colors"
            >
              <img src="/images/gmail.svg" alt="Mail" className="h-10 w-10" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-400 mb-6 border-b border-gray-700 pb-2 inline-block">
              Useful Links
            </h4>
            <ul className="space-y-3 text-white font-bold">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold text-gray-400 mb-6 border-b border-gray-700 pb-2 inline-block">
              Categories
            </h4>
            <ul className="space-y-3 text-white font-bold">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Learning Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SEO tools
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-400 mb-6 border-b border-gray-700 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 text-white font-bold">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  My Subscriptions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Account Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customer Review
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-400 mb-6 border-b border-gray-700 pb-2 inline-block">
              Social Links
            </h4>
            <ul className="space-y-3 text-white font-bold">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mail
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-white mt-4 text-sm">
        &copy; {new Date().getFullYear()} Masterdsk. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
