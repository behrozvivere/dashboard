// filepath: /workspaces/dashboard/src/features/products/categories/components/delete-category-dialog.tsx

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useCategories } from '../context/categories-context'

export function DeleteCategoryDialog() {
    const { isDeleteOpen, setIsDeleteOpen, selectedCategory } = useCategories()

    const handleDelete = () => {
        console.log('Deleting category with ID:', selectedCategory?.id)
        // You can add the code for deleting the category here
        setIsDeleteOpen(false)
    }

    return (
        <AlertDialog 
            open={isDeleteOpen} 
            onOpenChange={(isOpen) => !isOpen && setIsDeleteOpen(false)}
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete this category?</AlertDialogTitle>
                    <AlertDialogDescription className="space-y-2">
                        <p>
                            You are about to delete the category "{selectedCategory?.name}".
                        </p>
                        <p className="font-semibold text-destructive">
                            This action is irreversible.
                        </p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="gap-2">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                        onClick={handleDelete} 
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                        Delete Category
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}