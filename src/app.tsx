import Header from './components/header'
import { UserProvider } from './contexts/UserContext'
import { Blog } from './pages/blog'

export default function App() {
  return (
    <div>
      <Header />
      <UserProvider>
        <Blog />
      </UserProvider>
    </div>
  )
}
