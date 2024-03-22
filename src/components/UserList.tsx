// import { useQuery } from '@tanstack/react-query'
import { getUser, searchUsers, getUserRepos } from '../services/users'

const user = await getUser('zeitchef')
const users = await searchUsers('zeit')
const repos = await getUserRepos('zeitchef')

export const UserList: React.FC = () => {
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
