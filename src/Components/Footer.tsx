export function Footer() {
  return (
    <footer className="">
      <div className="px-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-200">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>Kigali, Rwanda</li>
              <li>+250 788 123 456</li>
              <li>+250 788 123 456</li>
              <li>example@diaspora.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="mb-4">Subscribe to our mailing list to get the latest updates.</p>
            <div className="flex gap-2">
              <input
                placeholder="Email"
                className="bg-white border border-gray-300 rounded px-2 py-1 w-full"
              />
              <button className="bg-[#1F365B] text-white px-4 py-1 rounded hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-[#1F365B] w-full py-6 text-white text-center mt-12">
        <p>
          Copyright © 2025 -{' '}
          <span className="text-[#DA7110]">Diaspora IWACU</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
