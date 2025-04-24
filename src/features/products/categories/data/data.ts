/*src/features/products/categories/data/data.ts*/

import {
    IconCircleCheck,
    IconCircleDashed,
    IconArchive,
} from '@tabler/icons-react'
import { CategoryStatus, Category } from './schema'

export const categoryStatusClasses = new Map<CategoryStatus, string>([
    ['active', 'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200'],
    ['inactive', 'bg-neutral-300/40 border-neutral-300'],
    [
        'archived',
        'bg-amber-100/30 text-amber-900 dark:text-amber-200 border-amber-200',
    ],
])

export const categoryStatusIcons = [
    {
        label: 'Active',
        value: 'active',
        icon: IconCircleCheck,
    },
    {
        label: 'Inactive',
        value: 'inactive',
        icon: IconCircleDashed,
    },
    {
        label: 'Archived',
        value: 'archived',
        icon: IconArchive,
    },
] as const

export const categories: Category[] = [
    {
        id: "cat_01",
        name: "Electronics",
        slug: "electronics",
        description: "Electronic devices and gadgets",
        parentId: null,
        status: "active",
        imageUrl: "/images/categories/electronics.jpg",
        createdAt: new Date("2023-01-15"),
        updatedAt: new Date("2023-01-15"),
        productCount: 120
    },
    {
        id: "cat_02",
        name: "Smartphones",
        slug: "smartphones",
        description: "Mobile phones and accessories",
        parentId: "cat_01",
        status: "active",
        imageUrl: "/images/categories/smartphones.jpg",
        createdAt: new Date("2023-01-16"),
        updatedAt: new Date("2023-01-16"),
        productCount: 45
    },
    {
        id: "cat_03",
        name: "Laptops",
        slug: "laptops",
        description: "Notebook computers and accessories",
        parentId: "cat_01",
        status: "active",
        imageUrl: "/images/categories/laptops.jpg",
        createdAt: new Date("2023-01-17"),
        updatedAt: new Date("2023-01-17"),
        productCount: 35
    },
    {
        id: "cat_04",
        name: "Clothing",
        slug: "clothing",
        description: "Apparel and fashion items",
        parentId: null,
        status: "active",
        imageUrl: "/images/categories/clothing.jpg",
        createdAt: new Date("2023-01-18"),
        updatedAt: new Date("2023-01-18"),
        productCount: 210
    },
    {
        id: "cat_05",
        name: "Men's Wear",
        slug: "mens-wear",
        description: "Clothing for men",
        parentId: "cat_04",
        status: "active",
        imageUrl: "/images/categories/mens-wear.jpg",
        createdAt: new Date("2023-01-19"),
        updatedAt: new Date("2023-01-19"),
        productCount: 85
    },
    {
        id: "cat_06",
        name: "Women's Wear",
        slug: "womens-wear",
        description: "Clothing for women",
        parentId: "cat_04",
        status: "active",
        imageUrl: "/images/categories/womens-wear.jpg",
        createdAt: new Date("2023-01-20"),
        updatedAt: new Date("2023-01-20"),
        productCount: 115
    },
    {
        id: "cat_07",
        name: "Home & Garden",
        slug: "home-garden",
        description: "Items for home and garden",
        parentId: null,
        status: "active",
        imageUrl: "/images/categories/home-garden.jpg",
        createdAt: new Date("2023-01-21"),
        updatedAt: new Date("2023-01-21"),
        productCount: 75
    },
    {
        id: "cat_08",
        name: "Kitchen",
        slug: "kitchen",
        description: "Kitchen appliances and accessories",
        parentId: "cat_07",
        status: "active",
        imageUrl: "/images/categories/kitchen.jpg",
        createdAt: new Date("2023-01-22"),
        updatedAt: new Date("2023-01-22"),
        productCount: 40
    },
    {
        id: "cat_09",
        name: "Furniture",
        slug: "furniture",
        description: "Furniture and home décor",
        parentId: "cat_07",
        status: "inactive",
        imageUrl: "/images/categories/furniture.jpg",
        createdAt: new Date("2023-01-23"),
        updatedAt: new Date("2023-01-23"),
        productCount: 30
    },
    {
        id: "cat_10",
        name: "Vintage Collections",
        slug: "vintage-collections",
        description: "Antique and vintage items",
        parentId: null,
        status: "archived",
        imageUrl: "/images/categories/vintage.jpg",
        createdAt: new Date("2023-01-24"),
        updatedAt: new Date("2023-01-24"),
        productCount: 15
    }
];
