import { Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export type OpportunityFilterState = {
  keyword: string
  sector: string
  language: string
  experienceLevel: string
  availability: string
  currentCity: string
}

export type FilterOption = {
  label: string
  value: string
}

type OpportunityFiltersProps = {
  filters: OpportunityFilterState
  options: {
    sectors: FilterOption[]
    languages: FilterOption[]
    experienceLevels: FilterOption[]
    availabilityOptions: FilterOption[]
    currentCities: FilterOption[]
  }
  onChange: (filters: OpportunityFilterState) => void
}

export function OpportunityFilters({ filters, onChange, options }: OpportunityFiltersProps) {
  const { t } = useTranslation()

  const updateFilter = (key: keyof OpportunityFilterState, value: string) => {
    onChange({ ...filters, [key]: value })
  }

  return (
    <form className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft" role="search">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1.2fr_repeat(5,1fr)]">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-navy">{t('opportunities.filters.keyword')}</span>
          <span className="relative block">
            <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-petrol" aria-hidden="true" />
            <input
              className="focus-ring h-12 w-full rounded-lg border border-slate-200 pe-4 ps-10 text-sm text-brand-ink"
              placeholder={t('opportunities.filters.keywordPlaceholder')}
              value={filters.keyword}
              onChange={(event) => updateFilter('keyword', event.target.value)}
            />
          </span>
        </label>

        <FilterSelect label={t('opportunities.filters.sector')} value={filters.sector} values={options.sectors} onChange={(value) => updateFilter('sector', value)} />
        <FilterSelect label={t('opportunities.filters.language')} value={filters.language} values={options.languages} onChange={(value) => updateFilter('language', value)} />
        <FilterSelect label={t('opportunities.filters.experienceLevel')} value={filters.experienceLevel} values={options.experienceLevels} onChange={(value) => updateFilter('experienceLevel', value)} />
        <FilterSelect label={t('opportunities.filters.availability')} value={filters.availability} values={options.availabilityOptions} onChange={(value) => updateFilter('availability', value)} />
        <FilterSelect label={t('opportunities.filters.currentCity')} value={filters.currentCity} values={options.currentCities} onChange={(value) => updateFilter('currentCity', value)} />
      </div>
    </form>
  )
}

type FilterSelectProps = {
  label: string
  onChange: (value: string) => void
  value: string
  values: FilterOption[]
}

function FilterSelect({ label, onChange, value, values }: FilterSelectProps) {
  const { t } = useTranslation()

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-brand-navy">{label}</span>
      <select
        className="focus-ring h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-brand-ink"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">{t('opportunities.filters.all')}</option>
        {values.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  )
}
