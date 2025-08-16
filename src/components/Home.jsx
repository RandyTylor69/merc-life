export default function About() {
  return (
    <main
      className="w-full h-auto px-4 md:px-8 py-20
                flex flex-col justify-center items-center
        "
    >
      {/** ------- Cover Image ------- */}
      <section
        className="w-full max-w-[40rem] py-10
                        flex justify-center items-center
      "
      >
        <img src="/images/home-page.jpg" className="object-cover" alt="img" />
      </section>
      {/** ------- Cover Text ------- */}

      <article
        className="w-full pt-8 max-w-[40rem]
                        flex flex-col justify-center items-center gap-8
      "
      >
        <h1 className="text-4xl" >Your war is revolutionary, we can get you the mercenary.</h1>
        <p>
          A mercenary is a private individual who joins an armed conflict for
          personal profit, is otherwise an outsider to the conflict, and is not
          a member of any other official military. Mercenaries fight for
          money or other forms of payment rather than for political interests.
        </p>
        <button>Book your merc</button>
      </article>
    </main>
  );
}
