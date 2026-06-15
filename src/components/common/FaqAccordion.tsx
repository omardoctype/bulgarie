import { ChevronDown } from 'lucide-react'

export type FaqAccordionItem = {
  answer: string
  id: string
  question: string
}

type FaqAccordionProps = {
  faqs: FaqAccordionItem[]
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {faqs.map((item) => (
        <details key={item.id} className="group p-5 open:bg-brand-mist/50">
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-start text-base font-semibold text-brand-navy transition hover:text-brand-petrol">
            <span>{item.question}</span>
            <ChevronDown className="h-5 w-5 shrink-0 text-brand-petrol transition group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="mt-3 text-sm leading-7 text-brand-ink/75">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
