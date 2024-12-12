import { Outlet, Link, NavLink } from "react-router";

export default function IndexLayout() {
  return (
    <>
      <Header />
      <main className="text-gray-50">
        <Outlet />
      </main>
    </>
  );
}

function Header() {
  function navLinkClasses({ isActive }) {
    return `block px-4 py-1 border ${
      isActive
        ? "font-bold bg-gradient-to-b from-gray-700 to-gray-950 border-gray-50 border-b-gray-950"
        : "italic border-transparent border-b-gray-50 transition hover:border-gray-400 hover:border-b-gray-50 hover:bg-gradient-to-b hover:from-gray-950 hover:to-gray-800"
    }`;
  }

  return (
    <header className="pt-2 text-gray-50 bg-gray-950 border-b border-gray-50">
      <div className="container mx-auto px-3 flex justify-between content-bottom">
        <Link
          to="/"
          className="pb-2 text-xl hover:underline hover:decoration-gray-500"
        >
          Jaymin Bhavsar
        </Link>

        <div className="flex -mb-px">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
        </div>
      </div>
    </header>
  );
}
