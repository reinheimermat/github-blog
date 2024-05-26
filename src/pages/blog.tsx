import { BsFillPeopleFill } from 'react-icons/bs'
import { FaGithub, FaRegShareSquare } from 'react-icons/fa'
import { MdFactory } from 'react-icons/md'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { SearchIssues } from '../components/searchIssues'
import { Post } from '../components/post'

export function Blog() {
  const { user } = useContext(UserContext)
  const { issues } = useContext(UserContext)

  return (
    <div className="container relative mx-auto mb-56 max-w-screen-lg px-4">
      <article className="-mt-20 flex flex-col gap-8 rounded-xl bg-baseProfile p-8 md:flex-row">
        <div>
          <img
            src={user.avatar}
            alt=""
            className="size-36 min-w-36 object-cover"
          />
        </div>
        <div className="h-full w-full">
          <div className="flex justify-between">
            <h1 className="mb-2 mt-2 text-2xl font-bold text-baseTitle">
              {user.name}
            </h1>
            <a
              href={user.url}
              target="_blank"
              className="flex items-center gap-2 text-xs font-bold uppercase text-blue hover:underline"
              rel="noreferrer"
            >
              github
              <FaRegShareSquare className="size-3" />
            </a>
          </div>
          <p>{user.bio}</p>
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaGithub className="text-baseLabel" />
              <span className="text-baseSubtitle">{user.login}</span>
            </div>
            <div className="flex items-center gap-2">
              <MdFactory className="text-baseLabel" />
              <span className="text-baseSubtitle">{user.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <BsFillPeopleFill className="text-baseLabel" />
              <span className="text-baseSubtitle">
                {user.followers} Seguidores
              </span>
            </div>
          </div>
        </div>
      </article>
      <SearchIssues />

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {issues.map((item) => (
          <Post
            key={item.id}
            title={item.title}
            body={item.body}
            createdAt={item.created_at}
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
}
