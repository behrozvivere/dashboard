import { Outlet, useNavigate, useRouterState } from '@tanstack/react-router'
import {
  IconShoppingBag,
  IconTags,
  IconCategory,
} from '@tabler/icons-react'
import { Separator } from '@/components/ui/separator'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useMemo } from 'react'

export default function Products() {
  const navigate = useNavigate()
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname
  
  // Determine the active tab based on the current path
  const activeTab = useMemo(() => {
    if (currentPath.includes('/categories')) return 'categories'
    if (currentPath.includes('/labels')) return 'labels'
    return 'products'
  }, [currentPath])
  
  // Get the active tab information
  const activeTabInfo = useMemo(() => {
    return navItems.find(item => item.value === activeTab) || navItems[0]
  }, [activeTab])
  
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fixed>
        <div className='space-y-0.5'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            {activeTabInfo.title}
          </h1>
          <p className='text-muted-foreground'>
            {activeTabInfo.description}
          </p>
        </div>
        
        {/* Tabs Navigation above the separator */}
        <Tabs 
          value={activeTab}
          className="w-full mt-4"
          onValueChange={(value) => {
            const route = navItems.find(item => item.value === value)?.href
            if (route) navigate({ to: route })
          }}
        >
          <TabsList>
            {navItems.map((item) => (
              <TabsTrigger key={item.value} value={item.value} className="flex items-center gap-2">
                {item.icon}
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <Separator className='my-4 lg:my-6' />
        
        <div className="flex w-full overflow-y-hidden">
          <Outlet />
        </div>
      </Main>
    </>
  )
}

const navItems = [
  {
    title: 'Products',
    value: 'products',
    icon: <IconShoppingBag size={18} />,
    href: '/products',
    description: 'Manage your product inventory, prices, and details.',
  },
  {
    title: 'Categories',
    value: 'categories',
    icon: <IconCategory size={18} />,
    href: '/products/categories',
    description: 'Organize products by creating and managing categories.',
  },
  {
    title: 'Labels',
    value: 'labels',
    icon: <IconTags size={18} />,
    href: '/products/labels',
    description: 'Create and manage labels to tag and filter your products.',
  },
]

