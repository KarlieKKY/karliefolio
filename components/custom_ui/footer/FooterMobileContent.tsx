export default function FooterMobileContent() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:hidden">
        <div className="mb-6">
          <p className="text-lg font-bold">Logo</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
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
