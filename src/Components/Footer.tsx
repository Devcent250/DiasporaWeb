

export function Footer() {
  return (
    <footer className="bg-[#00008B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
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
              <li>+250 788 123 456</li>
              <li>example@diaspora.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="mb-4">Subscribe to our mailing list to get the latest updates.</p>
            <div className="flex gap-2">
              <input placeholder="Email" className="bg-white" />
              <button >Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p>Copyright © 2024 - Diaspora IWACU. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer