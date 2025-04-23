import { createFileRoute } from '@tanstack/react-router'
import Product from '@/features/products/product'

export const Route = createFileRoute('/_authenticated/products/')({
  component: ProductRoute,
})

function ProductRoute() {
  return <Product />
}
