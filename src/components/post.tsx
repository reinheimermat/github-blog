import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface PostProps {
  title: string
  body: string
  createdAt: string
  id: number
}

export function Post({ title, body, createdAt, id }: PostProps) {
  const navigate = useNavigate()

  function handleViewPost() {
    navigate(`/posts/${id}`)
  }

  return (
    <div
      className="max-h-64 rounded-xl bg-basePost p-8"
      onClick={handleViewPost}
    >
      <div className="mb-5 flex items-start justify-between">
        <h1 className="text-xl font-bold text-baseTitle">{title}</h1>
        <span className="text-nowrap text-sm text-baseSpan">
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p className="max-h-28 overflow-hidden text-ellipsis">{body}</p>
    </div>
  )
}
