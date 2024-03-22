import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getUser, searchUsers, getUserRepos } from '../services/users'

export const UserList: React.FC = () => {
  const [userQuery] = useState('zeit')

  const { data: user } = useQuery({ queryKey: ['user'], queryFn: () => getUser('zeitchef') })
  const { data: users } = useQuery({ queryKey: ['users', userQuery], queryFn: () => searchUsers(userQuery) })
  const { data: repos } = useQuery({ queryKey: ['repos'], queryFn: () => getUserRepos('zeitchef') })

  return (
    <main>
      <h1 className="text-3xl">User</h1>
      <p>{user?.login}</p>

      <h1 className="text-3xl">Users</h1>
      <ul>{users?.items?.map((user) => <li key={user.id}>{user.login}</li>)}</ul>

      <h1 className="text-3xl">Repos</h1>
      <ul>{repos?.map((repo) => <li key={repo.id}>{repo.name}</li>)}</ul>
    </main>
  )
}
