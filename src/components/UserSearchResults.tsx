import { forwardRef } from 'react'
import { getUserRepos } from '../services/users'
import type { SearchUsersResponse, UserRepo } from '../types/users'
import * as Accordion from '@radix-ui/react-accordion'
import { Card } from '@radix-ui/themes'
import { ChevronDownIcon, StarFilledIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import '../assets/css/accordion.css'
import { useQueries } from '@tanstack/react-query'

interface AccordionItemProps {
  children: React.ReactNode
  className?: string
  props?: unknown
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionItemProps>(({ children, className, ...props }, ref) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger className={clsx('AccordionTrigger', className)} {...props} ref={ref}>
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
))

const AccordionContent = forwardRef<HTMLDivElement, AccordionItemProps>(({ children, className, ...props }, ref) => (
  <Accordion.Content className={clsx('AccordionContent', className)} {...props} ref={ref}>
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
))

interface RepoCardProps {
  repos: UserRepo[]
}

const RepoCard: React.FC<RepoCardProps> = ({ repos }) => {
  return (
    <>
      {!repos.length && <div className="w-full rounded-xl py-4">This user has no repos</div>}
      {repos.length
        ? repos.map((repo) => (
            <Card
              variant="surface"
              key={repo.id}
              className="mb-3 border-none shadow-sm last-of-type:mb-0 hover:shadow-md"
              asChild
            >
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <section className="flex justify-between">
                  <p className="text-lg font-bold">{repo.name}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <span>{repo.stargazers_count}</span>
                    <StarFilledIcon />
                  </div>
                </section>
                <span className="text-sm">{repo.description || 'No description'}</span>
              </a>
            </Card>
          ))
        : null}
    </>
  )
}

interface UserSearchResultsProps {
  users: SearchUsersResponse
}

export const UserSearchResults: React.FC<UserSearchResultsProps> = ({ users }) => {
  const userIndices = [0, 1, 2, 3, 4]

  const repos = useQueries({
    queries: userIndices.map((id) => ({
      queryKey: ['repos', users?.items[id].login],
      queryFn: () => getUserRepos(users?.items[id].login),
    })),
  })

  return (
    <section className="w-full px-2">
      <Accordion.Root className={clsx('AccordionRoot', [''])} type="single" orientation="vertical" collapsible>
        {users &&
          users.items.map((user, index) => (
            <Accordion.Item className="AccordionItem" key={user.login} value={user.login}>
              <AccordionTrigger className="px-1 hover:bg-gray-50">{user.login}</AccordionTrigger>
              <AccordionContent className="p-0">
                <RepoCard repos={repos[index].data || []} />
              </AccordionContent>
            </Accordion.Item>
          ))}
      </Accordion.Root>
    </section>
  )
}
