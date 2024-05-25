interface PostProps {
  title: string
  body: string
  date: string
}

export function Post({ title, body, date } = {} as PostProps) {
  return (
    <div className="max-h-64 rounded-xl bg-basePost p-8">
      <div className="mb-5 flex items-start justify-between">
        <h1 className="text-xl font-bold text-baseTitle">{title}</h1>
        <span className="text-nowrap text-sm text-baseSpan">{date}</span>
      </div>
      <p className="max-h-28 overflow-hidden text-ellipsis">{body}</p>
    </div>
  )
}
