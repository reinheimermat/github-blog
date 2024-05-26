import { useCallback, useContext, useEffect, useState } from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { FaCalendarDay, FaShareSquare } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { IoChatbubble } from 'react-icons/io5'
import { Issues, UserContext } from '../contexts/UserContext'
import { Link, useParams } from 'react-router-dom'
import { FormatDateTime } from '../utils/formatter'

export function Posts() {
  const { issues, user } = useContext(UserContext)
  const { id } = useParams()
  const [posts, setPosts] = useState<Issues>()

  const searchIssuesById = useCallback(
    (id: number) => {
      return setPosts(issues.filter((issue) => issue.id === id)[0])
    },
    [issues],
  )

  useEffect(() => {
    searchIssuesById(Number(id))
  }, [searchIssuesById, id])

  return (
    <div className="container relative mx-auto max-w-screen-lg px-4">
      <article className="-mt-20 gap-8 rounded-xl bg-baseProfile p-8">
        <div className="flex justify-between">
          <div className="flex items-center text-blue">
            <BiChevronLeft className="size-6" />
            <Link
              to={{ pathname: '/' }}
              className="text-xs font-bold uppercase"
            >
              Voltar
            </Link>
          </div>
          <div className="flex items-center gap-2 text-blue">
            <a
              href={posts?.html_url}
              target="_blank"
              className="text-xs font-bold uppercase"
              rel="noreferrer"
            >
              Ver no GitHub
            </a>
            <FaShareSquare className="size-3" />
          </div>
        </div>
        <h1 className="mb-3 mt-5 text-2xl font-bold text-baseTitle">
          {posts?.title}
        </h1>
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <FaGithub className="size-4 text-baseLabel" />
            <a href="" className="text-baseSpan">
              {user.login}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarDay className="size-4 text-baseLabel" />
            <p className="text-baseSpan">
              {FormatDateTime(posts?.created_at ?? '')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IoChatbubble className="size-4 text-baseLabel" />
            <p className="text-baseSpan">{posts?.comments} Comentários</p>
          </div>
        </div>
      </article>
      <main className="px-8 py-10">
        <p>{posts?.body}</p>
      </main>
    </div>
  )
}
