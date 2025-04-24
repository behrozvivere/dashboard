/*src/features/users/components/users-primary-buttons.tsx*/

import { IconFolderPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useCategories } from '../context/categories-context'

export function CategoriesPrimaryButtons() {
    const { setIsAddOpen } = useCategories()
    return (
        <div className='flex gap-2'>
            <Button className='space-x-1' onClick={() => setIsAddOpen(true)}>
                <span>Add Category</span> <IconFolderPlus size={18} />
            </Button>
        </div>
    )
}
