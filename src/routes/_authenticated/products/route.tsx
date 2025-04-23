import { createFileRoute } from '@tanstack/react-router'
import Products from '@/features/products'

export const Route = createFileRoute('/_authenticated/products')({
  component: ProductsRoute,
})

function ProductsRoute() {
  return <Products />
}
