import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white border-b shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-3xl font-bold tracking-wide text-orange-500">
          A.O
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="text-lg text-gray-600 font-medium hover:text-orange-500 transition">
                Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg text-gray-600 font-medium hover:text-orange-500 transition">
                About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-lg text-gray-600 font-medium hover:text-orange-500 transition">
                Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg text-gray-600 font-medium hover:text-orange-500 transition">
                Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
