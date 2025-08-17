import React from "react";
import { Link } from "react-router-dom";
export default function HostMercs() {
  const [myMercs, setMyMercs] = React.useState(null);
  let myMercsMapped;
  React.useEffect(() => {
    fetch("/api/host/mercs")
      .then((res) => res.json())
      .then((data) => setMyMercs(data.mercs));
  }, []);

  if (myMercs) {
    myMercsMapped = myMercs.map((m) => (
      <Link to={`/host/mercs/${m.id}`}>
        <div
          key={m.id}
          className="w-[20rem] h-auto p-4 
                    flex flex-row gap-6
                    bg-gray-100
        "
        >
          <img src={m.imageUrl} className="max-w-[4rem]" alt="m" />
          <article className="flex flex-col gap-1">
            <h1 className="text-lg">{m.name}</h1>
            <p className="text-gray-400">${m.price}/day</p>
          </article>
        </div>
      </Link>
    ));
  }

  return (
    <main
      className="h-screen w-full
                 flex justify-center pt-14"
    >
      <section
        className="h-auto w-auto
                flex flex-col gap-6

      "
      >
        {myMercs ? myMercsMapped : <h1>Loading...</h1>}
      </section>
    </main>
  );
}
