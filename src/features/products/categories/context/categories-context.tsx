/*src/features/products/categories/context/categories-context.tsx*/

import React, { useState } from 'react'
import { Category } from '../data/schema'

interface CategoriesContextType {
  isAddOpen: boolean
  setIsAddOpen: (isOpen: boolean) => void
  isEditOpen: boolean
  setIsEditOpen: (isOpen: boolean) => void
  isDeleteOpen: boolean
  setIsDeleteOpen: (isOpen: boolean) => void
  selectedCategory: Category | null
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category | null>>
}

const CategoriesContext = React.createContext<CategoriesContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function CategoriesProvider({ children }: Props) {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  return (
    <CategoriesContext.Provider 
      value={{ 
        isAddOpen, 
        setIsAddOpen, 
        isEditOpen, 
        setIsEditOpen, 
        isDeleteOpen, 
        setIsDeleteOpen, 
        selectedCategory, 
        setSelectedCategory 
      }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCategories = () => {
  const categoriesContext = React.useContext(CategoriesContext)

  if (!categoriesContext) {
    throw new Error('useCategories has to be used within <CategoriesProvider>')
  }

  return categoriesContext
}
