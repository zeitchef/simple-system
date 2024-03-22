import type { SearchUsersResponse } from '../types/users'

interface UserSearchResultsProps {
  users?: SearchUsersResponse
}

export const UserSearchResults: React.FC<UserSearchResultsProps> = ({ users }) => {
  return <>{users?.items?.map((user) => <div className="mt-2 w-full rounded-xl bg-blue-300 p-4">{user.login}</div>)}</>
}
