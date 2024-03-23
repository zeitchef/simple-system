import { getUserRepos } from '../services/users'
import type { SearchUsersResponse, UserReposResponse, UserRepo } from '../types/users'
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

const AccordionTrigger: React.FC<AccordionItemProps> = ({ children, className, ...props }) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger className={clsx('AccordionTrigger', className)} {...props}>
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
)

const AccordionContent: React.FC<AccordionItemProps> = ({ children, className, ...props }) => (
  <Accordion.Content className={clsx('AccordionContent', className)} {...props}>
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
)

interface RepoCardProps {
  repos: UserReposResponse[]
}

const RepoCard: React.FC<RepoCardProps> = ({ repos }) => {
  return (
    <>
      {!repos.length && <div className="w-full rounded-xl py-4">This user has no repos</div>}
      {repos.length
        ? repos.map((repo: UserRepo) => (
            <Card
              variant="surface"
              key={repo.id}
              className="mb-3 border-none shadow-sm last-of-type:mb-0 hover:shadow-md"
              asChild
            >
              <a href={repo.html_url}>
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
  query: string | null
  users?: SearchUsersResponse
  repos?: UserReposResponse
}

export const UserSearchResults: React.FC<UserSearchResultsProps> = ({ query, users }) => {
  const repos = useQueries({
    queries: [
      { queryKey: ['repos', users?.items[0]?.login], queryFn: () => getUserRepos(users?.items[0]?.login) },
      { queryKey: ['repos', users?.items[1]?.login], queryFn: () => getUserRepos(users?.items[1]?.login) },
      { queryKey: ['repos', users?.items[2]?.login], queryFn: () => getUserRepos(users?.items[2]?.login) },
      { queryKey: ['repos', users?.items[3]?.login], queryFn: () => getUserRepos(users?.items[3]?.login) },
      { queryKey: ['repos', users?.items[4]?.login], queryFn: () => getUserRepos(users?.items[4]?.login) },
    ],
    enabled: !!users,
  })

  return (
    <section className="w-full px-2">
      <Accordion.Root className={clsx('AccordionRoot', [''])} type="single" collapsible>
        {users?.items?.map((user, index) => (
          <Accordion.Item className="AccordionItem" key={user.login} value={user.login}>
            <AccordionTrigger className="px-1 hover:bg-gray-50">{user.login}</AccordionTrigger>
            <AccordionContent className="p-0">
              {repos[index].data && <RepoCard repos={repos[index].data} />}
            </AccordionContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  )
}
