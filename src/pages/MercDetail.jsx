import React from "react";
import { useParams, Link } from "react-router-dom";
export default function MercDetail() {
  const { id } = useParams();

  const [merc, setMerc] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/mercs/${id}`)
      .then((res) => res.json())
      .then((data) => setMerc(data.merc));
  }, []);

  return (
    <main
      className="h-screen
            flex justify-center items-center
        "
    >
      {merc ? (
        <div className="h-auto w-full flex flex-col gap-14
             max-w-[60rem] p-8
        ">
          <Link to={"/mercs"}>
            <p className="underline text-sm text-gray-400">Back to all mercs</p>
          </Link>
          <section
            className="h-auto w-full
                       flex flex-col md:flex-row gap-12
                "
          >
            {/** --------  Detail -------- */}
            <img src={merc.imageUrl} className="max-w-[20rem]" />
            <div className="flex flex-col gap-6 w-full">
              <i className="h-fit">{merc.type}</i>
              <h1 className="text-xl">{merc.name}</h1>
              <p className="text-lg">
                ${merc.price}
                <span className="text-sm text-gray-400">/day</span>
              </p>
              <p className="text-sm">{merc.description}</p>
            </div>
          </section>
        </div>
      ) : (
        <h1> Loading... </h1>
      )}
    </main>
  );
}
