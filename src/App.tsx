import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { UserSearch } from './components/UserSearch'
import { Theme } from '@radix-ui/themes'
import './App.css'

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
      <main className="flex items-center justify-center">
        <QueryClientProvider client={queryClient}>
          <UserSearch />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
    </Theme>
  )
}

export default App
