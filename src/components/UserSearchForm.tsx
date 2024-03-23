import { useRef } from 'react'
import { TextField, Button } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

interface UserSearchFormProps {
  handleQuery: (event: React.ChangeEvent<HTMLInputElement>) => void
  resetQuery: () => void
}

export const UserSearchForm: React.FC<UserSearchFormProps> = ({ handleQuery, resetQuery }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleReset = () => {
    if (inputRef.current) inputRef.current.value = ''
    resetQuery()
  }

  return (
    <main className="p-2" onKeyDown={(e) => e.key === 'Escape' && handleReset()}>
      <TextField.Root variant="soft" radius="full" color="plum">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input ref={inputRef} placeholder="Search Github usernames" autoFocus onChange={handleQuery} />
        {inputRef.current?.value && (
          <TextField.Slot>
            <Button size="1" radius="full" color="gray" onClick={handleReset}>
              Clear (ESC)
            </Button>
          </TextField.Slot>
        )}
      </TextField.Root>
    </main>
  )
}
