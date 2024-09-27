export default function FooterDesktopContent() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="hidden md:flex">
        <div className="w-1/2 pr-8">
          <p className="text-lg font-bold">Logo</p>
        </div>
        <div className="w-1/2 flex justify-between">
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase">Sitemap</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Homepage
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase">Socials</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Medium
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase">More</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Motion Demo
                </a>
              </li>
              <li className="mb-2">
                <p>download CV</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
