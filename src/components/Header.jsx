import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="px-8 py-2 bg-gray-800 text-white fixed w-full
                        flex flex-row justify-between"
    >
      <section>
        <Link to="/">
          <h1 className="text-xl">#MERCLIFE</h1>
        </Link>
      </section>
      <section className="flex gap-8">
        <Link to="/about">About</Link>
        <Link to="/mercs">Mercs</Link>
      </section>
    </header>
    
  );
}
