import { forwardRef } from 'react'
import { getUserRepos } from '../services/users'
import type { SearchUsersResponse, UserReposResponse } from '../types/users'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import '../assets/css/accordion.css'
import { useQueries } from '@tanstack/react-query'

interface UserSearchResultsProps {
  users?: SearchUsersResponse
  repos?: UserReposResponse
}

const AccordionTrigger = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger className={clsx('AccordionTrigger', className)} {...props} ref={forwardedRef}>
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
))

const AccordionContent = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content className={clsx('AccordionContent', className)} {...props} ref={forwardedRef}>
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
))

// TODO: RepoCard
interface UserReposProps {
  repos: UserReposResponse[]
}

const RepoCard: React.FC<UserReposProps> = ({ repos }) => {
  return (
    <>
      {!repos.length && <div className="w-full rounded-xl p-4">This user has repos</div>}
      {repos.map((repo) => (
        <div key={repo.id} className="w-full rounded-xl border border-gray-300 p-4">
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
        </div>
      ))}
    </>
  )
}

export const UserSearchResults: React.FC<UserSearchResultsProps> = ({ users }) => {
  const repos = useQueries({
    queries: [
      { queryKey: ['repos', users.items[0].login], queryFn: () => getUserRepos(users.items[0].login) },
      { queryKey: ['repos', users.items[1].login], queryFn: () => getUserRepos(users.items[1].login) },
      { queryKey: ['repos', users.items[2].login], queryFn: () => getUserRepos(users.items[2].login) },
      { queryKey: ['repos', users.items[3].login], queryFn: () => getUserRepos(users.items[3].login) },
      { queryKey: ['repos', users.items[4].login], queryFn: () => getUserRepos(users.items[4].login) },
    ],
    enabled: !!users,
  })

  // TODO: Memoize function
  const filterUserRepos = (repos: UserReposResponse, userId: number) => {
    return repos.filter((repo) => repo.owner.id === userId)
  }

  return (
    <section className="w-full p-2">
      <Accordion.Root className={clsx('AccordionRoot', ['shadow-sm'])} type="single" collapsible>
        {users?.items?.map((user, index) => (
          <Accordion.Item className="AccordionItem" key={user.login} value={user.login}>
            <AccordionTrigger className="hover:bg-gray-50">{user.login}</AccordionTrigger>
            <AccordionContent className="bg-gray-50">
              {repos[index].data && <RepoCard repos={repos[index].data} />}
            </AccordionContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  )
}
