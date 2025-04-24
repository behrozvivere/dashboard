/*src/features/products/categories/data/categories.ts*/

import { faker } from '@faker-js/faker'
import { Category } from './schema'
import { slugify } from '../../../../lib/utils'

// Define some main categories as constants
const mainCategories = [
  'Electronics',
  'Clothing',
  'Home Appliances',
  'Food',
  'Sports',
  'Cosmetics',
]

// Create main categories
export const mainCategoriesData = mainCategories.map((name): Category => {
  return {
    id: faker.string.uuid(),
    name,
    slug: slugify(name),
    description: faker.lorem.sentences(2),
    imageUrl: faker.image.url(),
    status: 'active',
    parentId: undefined,
    productCount: faker.number.int({ min: 10, max: 50 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})

// Define subcategories for each main category
const subCategoriesMap = {
  Electronics: ['Mobile', 'Laptop', 'Camera', 'Tablet', 'Accessories'],
  Clothing: ['Men', 'Women', 'Kids', 'Sportswear', 'Accessories'],
  'Home Appliances': ['Kitchen', 'Decoration', 'Electrical Appliances', 'Furniture', 'Carpets'],
  Food: ['Nuts', 'Dairy', 'Beverages', 'Canned Food', 'Snacks'],
  Sports: ['Sports Shoes', 'Sportswear', 'Gym Equipment', 'Bicycles', 'Camping'],
  Cosmetics: ['Makeup', 'Skincare', 'Shampoo & Haircare', 'Perfumes', 'Oral Care'],
}

// Create subcategories for each main category
export const subCategoriesData = mainCategoriesData.flatMap((mainCategory) => {
  const subCategoryNames = subCategoriesMap[mainCategory.name as keyof typeof subCategoriesMap] || []
  
  return subCategoryNames.map((subName): Category => {
    return {
      id: faker.string.uuid(),
      name: subName,
      slug: slugify(`${mainCategory.name}-${subName}`),
      description: faker.lorem.sentences(1),
      imageUrl: faker.image.url(),
      parentId: mainCategory.id,
      status: faker.helpers.arrayElement(['active', 'inactive', 'archived']),
      productCount: faker.number.int({ min: 5, max: 30 }),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }
  })
})

// Combine all categories (main and subcategories)
export const categories = [...mainCategoriesData, ...subCategoriesData]
