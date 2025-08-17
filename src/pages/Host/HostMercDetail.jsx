import { useParams, Link, Outlet, NavLink} from "react-router-dom";

import React from "react";

export default function HostMercDetail() {
  const { id } = useParams();
  const [merc, setMerc] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/mercs/${id}`)
      .then((res) => res.json())
      .then((data) => setMerc(data.mercs[0]));
  }, []);

  return (
    <main
      className="h-screen w-full
                 flex pt-12 flex-col gap-10 items-center"
    >
      <Link to="/host/mercs"> ⬅ Go back</Link>
      {merc ? (
        <div
          className="h-fit w-full max-w-[40rem] bg-gray-100
                            flex flex-col gap-4 p-4
            "
        >
          <header className="flex flex-row gap-4">
            <img src={merc.imageUrl} className="max-w-[10rem]" alt="m" />
            <article className="flex flex-col gap-4">
              <i className="">{merc.type}</i>
              <h1 className="text-2xl md:text-4xl">{merc.name}</h1>
              <p className="text-xl">${merc.price}/day</p>
            </article>
          </header>

          <nav className="flex flex-row gap-4 border-b-2 pb-2">
            <NavLink
              end
              to="."
              className={({ isActive }) =>
                isActive ? "active-nav-2" : undefined
              }
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive ? "active-nav-2" : undefined
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) =>
                isActive ? "active-nav-2" : undefined
              }
            >
              Photos
            </NavLink>
          </nav>

          <Outlet context={merc} />
        </div>
      ) : (
        <h1> Loading </h1>
      )}
    </main>
  );
}
