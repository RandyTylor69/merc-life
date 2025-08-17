import { useOutletContext } from "react-router-dom";

export default function HMInfo() {

    const {name, type, description} = useOutletContext()


  return (
    <article className="flex flex-col gap-4">
      <p>Name: {name} </p>
      <p>Category: {type}</p>
      <p>Description:{description} </p>
    </article>
  );
}
