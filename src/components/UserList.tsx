import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getUser, searchUsers, getUserRepos } from '../services/users'

export const UserList: React.FC = () => {
  const [userQuery] = useState('zeit')

  const { data: user } = useQuery({ queryKey: ['user'], queryFn: () => getUser('zeitchef') })
  const { data: users } = useQuery({ queryKey: ['users', userQuery], queryFn: () => searchUsers(userQuery) })
  const { data: repos } = useQuery({ queryKey: ['repos'], queryFn: () => getUserRepos('zeitchef') })

  console.table({ user, users, repos })

  return (
    <main className="min-w-xl lg:min-w-2xl flex flex-col items-center rounded-xl border border-gray-300 p-2">
      <div className="w-full rounded-xl bg-red-300 p-4">UserSearch</div>
      <div className="mt-2 w-full rounded-xl bg-blue-300 p-4">UserAccordions</div>
    </main>
  )
}
