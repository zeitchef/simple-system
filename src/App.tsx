import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { UserList } from './components/UserList'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <main className="p-4">
      <QueryClientProvider client={queryClient}>
        <UserList />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  )
}

export default App
