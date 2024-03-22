import { TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

interface UserSearchFormProps {
  handleQuery: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// TODO: Add zod form validation?

export const UserSearchForm: React.FC<UserSearchFormProps> = ({ handleQuery }) => {
  return (
    <main className="p-2">
      <TextField.Root variant="soft" radius="full" color="gray">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Search Github users..." onChange={handleQuery} />
      </TextField.Root>
    </main>
  )
}
