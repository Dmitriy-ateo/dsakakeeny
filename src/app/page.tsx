const Home = () => (
  <article className="flex min-h-screen flex-col items-center justify-between">
    <section className="flex flex-row flex-nowrap container">
      <div className="flex flex-col">
        <p className="eyebrow">ChefProblem Solver</p>
        <p className="h1">I&apos;m Denice Sakakeeny.</p>
        <p className="text-base">
          With 25+ years in corporate finance, I help founders and executives
          solve complex business problems. I prioritize people, processes, and
          technology to drive sustainable growth.
        </p>
        <p className="text-base">
          Since 2011, I&apos;ve been an independent consultant and serve as an
          Interim or Fractional CFO for select clients.
        </p>
      </div>
      <div className="list-image-none">
        <img
          src="/assets/images/D_Image.png"
          alt="Denice Sakakeeny"
          className="rounded-lg"
        />
      </div>
    </section>
  </article>
);

export default Home;
