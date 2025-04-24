// filepath: /workspaces/dashboard/src/features/products/categories/components/columns.tsx

"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react"
import { format } from "date-fns"
import { Category, CategoryStatus } from "../data/schema"
import { categoryStatusClasses, categoryStatusIcons } from "../data/data"
import { useCategories } from "../context/categories-context"
import { DataTableColumnHeader } from "./data-table-column-header"

export const columns: ColumnDef<Category>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: "w-[30px] !pr-0",
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const isSubcategory = row.original.parentId !== null

      return (
        <div className={`pl-${isSubcategory ? '4' : '0'} flex flex-col`}>
          <span className="font-medium">{row.getValue("name")}</span>
          {isSubcategory && (
            <span className="text-xs text-muted-foreground">Subcategory</span>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[250px] truncate font-medium">
        {row.getValue("description") || "-"}
      </div>
    ),
  },
  {
    accessorKey: "productCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Products" />
    ),
    cell: ({ row }) => (
      <div className="font-medium text-center">
        {row.original.productCount || 0}
      </div>
    ),
    meta: {
      className: 'text-center',
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as CategoryStatus
      const statusInfo = categoryStatusIcons.find(s => s.value === status)
      
      if (!statusInfo) return null
      
      const Icon = statusInfo.icon
      
      return (
        <div className="flex w-[100px] items-center">
          <Badge 
            variant="outline" 
            className={`${categoryStatusClasses.get(status)} flex gap-1 items-center justify-center w-full py-1 capitalize`}
          >
            <Icon size={14} />
            <span>{statusInfo.label}</span>
          </Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Updated" />
    ),
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          {format(row.getValue("updatedAt"), "MMM d, yyyy")}
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original
      const { setIsEditOpen, setSelectedCategory, setIsDeleteOpen } = useCategories()

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <IconDotsVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                setSelectedCategory(category)
                setIsEditOpen(true)
              }}
              className="cursor-pointer"
            >
              <IconEdit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setSelectedCategory(category)
                setIsDeleteOpen(true)
              }}
              className="cursor-pointer text-destructive focus:text-destructive"
            >
              <IconTrash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    meta: {
      className: 'w-[50px]',
    },
  },
]