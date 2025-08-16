export default function About() {
  return (
    <main
      className="w-full h-screen px-4 md:px-8 py-20 mb-2 sm:mb-0
                flex flex-col lg:flex-row justify-center items-center gap-6"
    >
      <section className="max-w-[25rem] h-auto">
        <img src="/images/about-page.jpg" className="object-cover"/>
      </section>

      <article className="flex flex-col gap-6">
        <p>
          Beginning in the 20th century, mercenaries have increasingly come to
          be seen as less entitled to protection by rules of war than
          non-mercenaries.
        </p>
        <p>
          The Geneva Conventions declare that mercenaries are not recognized as
          legitimate combatants and do not have to be granted the same legal
          protections as captured service personnel of the armed forces. In
          practice, whether or not a person is a mercenary may be a matter of
          degree, as financial and political interests may overlap.
        </p>
        <div className="flex flex-col gap-6 bg-gray-800 text-white rounded-[2rem] 
                        p-4 md:p-8 justify-center items-center
        ">
            <h1 className="text-2xl">
No more waiting for your allies to save your ass. 
            </h1>
            <button className="max-w-40 border-white hover:bg-white hover:text-gray-800">
                Explore our mercs
            </button>
        </div>
      </article>
    </main>
  );
}
