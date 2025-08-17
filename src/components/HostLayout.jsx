import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <main className="pt-20">
      <nav className="w-full pl-4 md:pl-8
                        flex gap-4 md:gap-8">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active-nav-2" : undefined)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "active-nav-2" : undefined)}
        >
          Income
        </NavLink>
                <NavLink
          to="mercs"
          className={({ isActive }) => (isActive ? "active-nav-2" : undefined)}
        >
          Mercs
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? "active-nav-2" : undefined)}
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </main>
  );
}
