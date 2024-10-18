export default function FooterDesktopContent() {
  return (
    <footer className="uppercase text-center font-flex">
      <div className="">
        <nav aria-label="Social media links">
          <ul className="flex gap-2 justify-center">
            <li>logo</li>
            <li>logo</li>
            <li>logo</li>
          </ul>
        </nav>
      </div>
      <div className="">
        <p>motion demo</p>
        <p>download cv</p>
      </div>
      <nav aria-label="Footer navigation">
        <ul className="flex gap-3">
          <li>Home</li>
          <li>all works</li>
          <li>about me</li>
          <li>contact</li>
        </ul>
      </nav>
    </footer>
  );
}
