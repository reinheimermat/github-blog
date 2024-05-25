import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { UserContext } from '../contexts/UserContext'

const searchIssuesSchema = z.object({
  query: z.string(),
})

type SearchIssuesSchema = z.infer<typeof searchIssuesSchema>

export function SearchIssues() {
  const { issues } = useContext(UserContext)
  const { register } = useForm<SearchIssuesSchema>({
    resolver: zodResolver(searchIssuesSchema),
  })

  return (
    <div className="mt-20">
      <div className="mb-3 flex items-center justify-between">
        <strong className="text-lg font-bold text-baseSubtitle">
          Publicações
        </strong>
        <span className="text-sm text-baseSpan">
          {issues.length} publicações
        </span>
      </div>
      <form>
        <input
          type="text"
          placeholder="Buscar Conteúdo"
          className="w-full rounded-md bg-baseInput p-3 outline outline-1 outline-baseBorder placeholder:text-baseLabel focus:outline-blue"
          {...register('query')}
        />
      </form>
    </div>
  )
}
