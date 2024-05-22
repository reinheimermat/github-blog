import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../libs/axios'

interface User {
  name: string
  login: string
  bio: string
  avatar: string
  followers: number
  company: string
  url: string
}

interface UserContextData {
  user: User
  fetchUserApi: () => Promise<void>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const fetchUserApi = useCallback(async () => {
    const data = await api
      .get('/users/reinheimermat')
      .then((response) => response.data)

    setUser(() => ({
      name: data.name,
      login: data.login,
      bio: data.bio,
      avatar: data.avatar_url,
      followers: data.followers,
      company: data.company,
      url: data.html_url,
    }))
  }, [])

  useEffect(() => {
    fetchUserApi()
  }, [fetchUserApi])

  return (
    <UserContext.Provider value={{ fetchUserApi, user }}>
      {children}
    </UserContext.Provider>
  )
}
