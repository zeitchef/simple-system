import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { UserSearch } from './components/UserSearch'
import { Theme } from '@radix-ui/themes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <Theme>
      <header className="mx-auto mt-24 max-w-xl px-4 md:px-1">
        <h1 className="font-quattrocento-sans text-5xl font-bold">Github User Search</h1>
        <p className="mt-4 px-1">
          Github User Search allows you to search for Github usernames. Simply search for a user, and we will show you
          the top five users that match your query. Happy searching!
        </p>
      </header>
      <main className="flex items-center justify-center">
        <QueryClientProvider client={queryClient}>
          <UserSearch className="mx-4 md:mx-0" />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
    </Theme>
  )
}

export default App
