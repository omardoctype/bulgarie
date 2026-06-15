type PageHeroProps = {
  eyebrow?: string
  title: string
  intro: string
}

export function PageHero({ eyebrow, intro, title }: PageHeroProps) {
  return (
    <section className="bg-brand-mist py-14 md:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase text-brand-petrol">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-4xl font-semibold leading-tight text-brand-navy md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-ink/75">{intro}</p>
        </div>
      </div>
    </section>
  )
}
