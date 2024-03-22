import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getUser, searchUsers, getUserRepos } from '../services/users'
import { useDebounce } from '@uidotdev/usehooks'
import { UserSearchForm } from './UserSearchForm'
import { UserSearchResults } from './UserSearchResults'

const LoadingState = () => {
  return <div className="mt-2 w-full rounded-xl p-4">Loading...</div>
}
const ErrorState = ({ message: string }) => {
  return <div className="mt-2 w-full rounded-xl bg-red-300 p-4">{message}</div>
}

export const UserSearch: React.FC = () => {
  const [userQuery, setUserQuery] = useState<string | null>(null)
  const debouncedUserQuery = useDebounce(userQuery, 700)

  const {
    data: users,
    isLoading: usersIsLoading,
    error: usersError,
  } = useQuery({
    queryKey: ['users', debouncedUserQuery],
    queryFn: () => searchUsers(debouncedUserQuery),
    enabled: !!debouncedUserQuery,
  })
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser('zeitchef'),
    enabled: !!users,
  })
  const { data: repos } = useQuery({
    queryKey: ['repos'],
    queryFn: () => getUserRepos('zeitchef'),
    enabled: !!user,
  })

  const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserQuery(event.target.value)
  }

  return (
    <main className="m-4 w-[600px] flex-col items-center rounded-xl border border-gray-300 p-2">
      <UserSearchForm handleQuery={updateQuery} />

      {usersIsLoading && <LoadingState />}
      {usersError && <ErrorState message={usersError.message} />}
      {users && <UserSearchResults users={users} />}
    </main>
  )
}
