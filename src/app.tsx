import { Outlet } from 'react-router-dom'
import Header from './components/header'
import { UserProvider } from './contexts/UserContext'

export default function App() {
  return (
    <div>
      <Header />
      <UserProvider>
        <Outlet />
      </UserProvider>
    </div>
  )
}
