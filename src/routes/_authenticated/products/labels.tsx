import { createFileRoute } from '@tanstack/react-router'
import Labels from '@/features/products/labels'

export const Route = createFileRoute('/_authenticated/products/labels')({
  component: LabelsRoute,
})

function LabelsRoute() {
  return <Labels />
}
