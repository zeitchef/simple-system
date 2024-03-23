import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { searchUsers } from '../services/users'
import { useDebounce } from '@uidotdev/usehooks'
import { UserSearchForm } from './UserSearchForm'
import { UserSearchResults } from './UserSearchResults'
import clsx from 'clsx'

const EmptyState = () => {
  return <div className="mt-2 w-full rounded-xl p-4 text-gray-400">No users found</div>
}
const LoadingState = () => {
  return <div className="mt-2 w-full rounded-xl p-4 text-gray-400">Loading...</div>
}
const ErrorState: React.FC<{ message: string }> = ({ message }) => {
  return <div className="mt-2 w-full rounded-xl bg-red-300 p-4">{message}</div>
}

export const UserSearch: React.FC<{ className?: string }> = ({ className }) => {
  const [userQuery, setUserQuery] = useState<string>('')
  const debouncedUserQuery = useDebounce(userQuery, 300)

  const {
    data: users,
    isLoading: usersIsLoading,
    error: usersError,
  } = useQuery({
    queryKey: ['users', debouncedUserQuery],
    queryFn: () => searchUsers(debouncedUserQuery),
    enabled: !!debouncedUserQuery,
  })

  const updateUserQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserQuery(event.target.value)
  }

  const resetUserQuery = () => {
    setUserQuery('')
  }

  return (
    <main
      className={clsx(
        'my-12 w-[600px] flex-col items-center rounded-xl border border-gray-400 bg-white p-2',
        className
      )}
      data-testid="user-search"
    >
      <UserSearchForm handleQuery={updateUserQuery} resetQuery={resetUserQuery} />

      {usersIsLoading && <LoadingState />}
      {usersError && <ErrorState message={usersError.message} />}
      {users && !users?.items?.length && debouncedUserQuery && <EmptyState />}

      {users && <UserSearchResults users={users} />}
    </main>
  )
}
