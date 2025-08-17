import React from "react";
import { Link } from "react-router-dom";
export default function Mercs() {
  const [mercs, setMercs] = React.useState([]);
  React.useEffect(() => {
    const fetchMercs = async () => {
      try {
        const res = await fetch("/api/mercs");
        const data = await res.json();
        setMercs(data.mercs);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchMercs();
  }, []);

  const mercsMapped = mercs.map((merc) => (
    <div key={merc.id} className="flex flex-col gap-2">
      <Link to={`/mercs/${merc.id}`}>
        <img src={merc.imageUrl} />
        <div className="flex flex-row w-full justify-between">
          <h3>{merc.name}</h3>
          <p className="flex flex-col">
            ${merc.price}
            <span className="text-sm text-gray-400">/day</span>
          </p>
        </div>
        <i className="-mt-5">{merc.type}</i>
      </Link>
    </div>
  ));

  return (
    <main className="h-full w-full py-20">
      {/** ------- wrapper ------- */}
      <header className="h-auto py-8 px-12">
        <h1 className="text-4xl">Explore our mercenary options</h1>
      </header>
      <section
        className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]
        gap-6 md:gap-12
        p-6 md:p-12
      "
      >
        {mercsMapped}
      </section>
    </main>
  );
}
