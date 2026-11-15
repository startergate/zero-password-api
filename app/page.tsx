import {dictionaries, links} from "./dictionaries";

const t = dictionaries.en

function Logo({size}: { size: number }) {
  return (
    <svg viewBox="0 0 128 128" width={size} height={size} aria-hidden="true">
      <circle cx="64" cy="64" r="32" fill="none" stroke="currentColor" strokeWidth="14"/>
      <line x1="30" y1="98" x2="98" y2="30" stroke="currentColor" strokeWidth="14" strokeLinecap="round"/>
    </svg>
  )
}

export default function Home() {
  const repositories = Object.entries(links.repositories) as [keyof typeof links.repositories, string][]
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-14 px-6 py-20">
      <header className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Logo size={40}/>
          <h1 className="text-3xl font-bold tracking-tight">{t.title}</h1>
        </div>
        <p className="text-xl leading-relaxed text-muted">{t.tagline}</p>
        <div>
          <span
            aria-disabled="true"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-base font-medium text-muted"
          >
            {t.install}
            <span className="rounded-full bg-line px-2 py-0.5 text-xs">{t.installSoon}</span>
          </span>
        </div>
      </header>

      <ul className="flex flex-col gap-3 text-base leading-relaxed">
        {t.points.map((point) => (
          <li key={point} className="flex gap-3">
            <span aria-hidden="true" className="mt-2.5 size-1.5 flex-none rounded-full bg-foreground"/>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <section className="flex flex-col gap-3 rounded-2xl border border-line p-6">
        <h2 className="text-lg font-semibold">{t.reportTitle}</h2>
        <p className="text-muted">{t.reportBody}</p>
        <a
          href={links.ruleRequest}
          className="inline-flex h-10 w-fit items-center rounded-full bg-foreground px-5 font-medium text-background hover:opacity-85"
        >
          {t.report}
        </a>
      </section>

      <footer className="flex flex-col gap-2 border-t border-line pt-6 text-sm">
        <h2 className="font-semibold">{t.sourceTitle}</h2>
        <ul className="flex flex-col gap-1">
          {repositories.map(([key, href]) => (
            <li key={key}>
              <a href={href} className="underline-offset-4 hover:underline">
                {href.replace("https://github.com/", "")}
              </a>
              <span className="text-muted"> · {t.repositories[key]}</span>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
