/*src/features/users/index.tsx*/


//import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { columns } from '@/features/users/components/users-columns.tsx'
import { UsersDialogs } from '@/features/users/components/users-dialogs'
import { UsersPrimaryButtons } from '@/features/users/components/users-primary-buttons'
import { UsersTable } from '@/features/users/components/users-table'
import UsersProvider from '@/features/users/context/users-context.tsx'
import { userListSchema } from '@/features/users/data/schema.ts'
import { users } from '@/features/users/data/users.ts'

export default function Users() {
  // Parse user list
  const userList = userListSchema.parse(users)

  return (
    <UsersProvider>
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <UsersPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
          <UsersTable data={userList} columns={columns} />
        </div>
      </Main>

      <UsersDialogs />
    </UsersProvider>
  )
}
