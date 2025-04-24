/*src/features/products/categories/index.tsx*/

import { columns } from './components/columns'
import { CategoriesPrimaryButtons } from './components/categories-primary-buttons'
import { CategoriesTable } from './components/categories-table'
import { AddEditCategoryForm } from './components/add-edit-category-form'
import { DeleteCategoryDialog } from './components/delete-category-dialog'
import CategoriesProvider from './context/categories-context'
import { categories } from './data/data'

export default function Categories() {
  return (
    <CategoriesProvider>
      <div className="w-full px-4">
        <div className='mb-4 flex items-center justify-between flex-wrap gap-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Product Categories</h2>
            <p className='text-muted-foreground'>
              Manage product categories and subcategories.
            </p>
          </div>
          <CategoriesPrimaryButtons />
        </div>
        <div className='w-full'>
          <CategoriesTable data={categories} columns={columns} />
        </div>
      </div>

      <AddEditCategoryForm />
      <DeleteCategoryDialog />
    </CategoriesProvider>
  )
}

