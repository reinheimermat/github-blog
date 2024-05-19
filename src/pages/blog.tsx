import { BsFillPeopleFill } from 'react-icons/bs'
import { FaGithub, FaRegShareSquare } from 'react-icons/fa'
import { MdFactory } from 'react-icons/md'
import avatar from '../assets/avatar.png'

export function Blog() {
  return (
    <div className="container relative mx-auto max-w-screen-lg px-4">
      <article className="-mt-20 flex gap-8 rounded-xl bg-baseProfile p-8">
        <div>
          <img src={avatar} alt="" className="size-36 min-w-36 object-cover" />
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="mb-2 mt-2 text-2xl font-bold text-baseTitle">
              Matheus Reinheimer
            </h1>
            <a
              href="#"
              className="flex items-center gap-2 text-xs font-bold uppercase text-blue hover:underline"
            >
              github
              <FaRegShareSquare className="size-3" />
            </a>
          </div>
          <p className="">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaGithub className="text-baseLabel" />
              <span className="text-baseSubtitle">reinheimermat</span>
            </div>
            <div className="flex items-center gap-2">
              <MdFactory className="text-baseLabel" />
              <span className="text-baseSubtitle">Mave Tecnologia</span>
            </div>
            <div className="flex items-center gap-2">
              <BsFillPeopleFill className="text-baseLabel" />
              <span className="text-baseSubtitle">32 Seguidores</span>
            </div>
          </div>
        </div>
      </article>
      <div className="mt-20">
        <div className="mb-3 flex items-center justify-between">
          <strong className="text-lg font-bold text-baseSubtitle">
            Publicações
          </strong>
          <span className="text-sm text-baseSpan">6 publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar Conteúdo"
          className="w-full rounded-md bg-baseInput p-3 outline outline-1 outline-baseBorder placeholder:text-baseLabel focus:outline-blue"
        />
      </div>
    </div>
  )
}
