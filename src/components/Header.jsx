import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
export default function Header() {
  return (
    <header
      className="px-4 md:px-8 py-2 bg-gray-800 text-white fixed w-full
                        flex flex-row justify-between"
    >
      <section>
        <NavLink to="/">
          <h1 className="text-xl">#MERCLIFE</h1>
        </NavLink>
      </section>
      <nav className="flex gap-4 md:gap-8">
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav-1" : undefined)}
          to="host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav-1" : undefined)}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav-1" : undefined)}
          to="mercs"
        >
          Mercs
        </NavLink>
        <NavLink
          className={ ` flex justify-center items-center ${({ isActive }) => (isActive ? "active-nav-1" : undefined)}`}
          to="login"
        >
          <FaRegUserCircle />
        </NavLink>
      </nav>
    </header>
  );
}
