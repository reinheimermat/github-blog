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

export interface Issues {
  id: number
  title: string
  body: string
  total: number
  comments: number
  created_at: string
  html_url: string
}

interface UserContextData {
  user: User
  issues: Issues[]
  fetchUserApi: () => Promise<void>
  fetchIssuesApi: (query?: string) => Promise<void>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [issues, setIssues] = useState<Issues[]>([])

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

  const fetchIssuesApi = useCallback(async () => {
    const response = await api.get('/repos/reinheimermat/github-blog/issues')

    setIssues(() => [])

    response.data.map((issue: Issues) => {
      return setIssues((state) => {
        return [
          ...state,
          {
            id: issue.id,
            title: issue.title,
            body: issue.body,
            total: issue.comments,
            comments: issue.comments,
            created_at: issue.created_at,
            html_url: issue.html_url,
          },
        ]
      })
    })
  }, [])

  useEffect(() => {
    fetchIssuesApi()
  }, [fetchIssuesApi])

  useEffect(() => {
    fetchUserApi()
  }, [fetchUserApi])

  return (
    <UserContext.Provider
      value={{ fetchUserApi, fetchIssuesApi, user, issues }}
    >
      {children}
    </UserContext.Provider>
  )
}
