// filepath: /workspaces/dashboard/src/features/products/categories/components/add-edit-category-form.tsx

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useCategories } from '../context/categories-context'
import { categories } from '../data/data'
import { 
    Select, 
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue 
} from '@/components/ui/select'
import { categoryStatusIcons } from '../data/data'
import { slugify } from '@/lib/utils'

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Category name must be at least 2 characters',
    }),
    slug: z.string().min(2, {
        message: 'Slug must be at least 2 characters',
    }),
    description: z.string().optional(),
    imageUrl: z.string().optional(),
    status: z.enum(['active', 'inactive', 'archived']),
    parentId: z.string().optional(),
})

export function AddEditCategoryForm() {
    const { isAddOpen, isEditOpen, setIsAddOpen, setIsEditOpen, selectedCategory } = useCategories()
    const isOpen = isAddOpen || isEditOpen;
    const isEditMode = isEditOpen;
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            slug: '',
            description: '',
            imageUrl: '',
            status: 'active',
            parentId: undefined,
        },
    })

    useEffect(() => {
        if (isEditMode && selectedCategory) {
            form.reset({
                name: selectedCategory.name,
                slug: selectedCategory.slug,
                description: selectedCategory.description || '',
                imageUrl: selectedCategory.imageUrl || '',
                status: selectedCategory.status,
                parentId: selectedCategory.parentId || undefined,
            })
        } else {
            form.reset({
                name: '',
                slug: '',
                description: '',
                imageUrl: '',
                status: 'active',
                parentId: undefined,
            })
        }
    }, [selectedCategory, isEditMode, form])

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        // Add your save logic here for add or edit mode
        
        closeDialog()
    }

    function closeDialog() {
        if (isAddOpen) setIsAddOpen(false);
        if (isEditOpen) setIsEditOpen(false);
    }

    // List of main categories to select as parent category
    const mainCategories = categories.filter(c => !c.parentId)

    // Auto-generate slug based on category name
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value
        form.setValue('name', name)
        form.setValue('slug', slugify(name))
    }

    return (
        <Dialog open={isOpen} onOpenChange={closeDialog}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>
                        {isEditMode ? 'Edit Category' : 'Add New Category'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEditMode
                            ? 'Edit the category details'
                            : 'Enter the details for the new category'}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter category name"
                                            {...field}
                                            onChange={handleNameChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slug</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="example-category"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="parentId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Parent Category (Optional)</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select parent category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="">No Parent (Main Category)</SelectItem>
                                            {mainCategories.map((category) => (
                                                <SelectItem key={category.id} value={category.id}>
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter category description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image URL (Optional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter image URL"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {categoryStatusIcons.map((status) => (
                                                <SelectItem key={status.value} value={status.value}>
                                                    <div className="flex items-center gap-2">
                                                        <status.icon size={16} />
                                                        <span>{status.label}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter className="gap-2 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={closeDialog}
                            >
                                Cancel
                            </Button>
                            <Button type="submit">
                                {isEditMode ? 'Save Changes' : 'Create Category'}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
