import { about } from '../data/content'

export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-emerald/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-[0.15em] text-slate-200 uppercase">
          About
        </h2>
      </div>

      <div>
        {about.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`leading-relaxed text-slate-400 ${
              index > 0 ? 'mt-4' : ''
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
