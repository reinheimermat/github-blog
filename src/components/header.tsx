import cover from '../assets/cover.jpg'

export default function Header() {
  return (
    <header>
      <img src={cover} alt="" className="w-full object-cover" />
    </header>
  )
}
