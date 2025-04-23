export default function LabelsContent() {
    return (
        <div className="space-y-4 w-full">
            <div className="rounded-md border p-4">
                <h2 className="text-xl font-semibold mb-2">Product Labels</h2>
                <p className="text-muted-foreground">
                    In this section, you can manage product labels.
                </p>
                
                <div className="bg-card rounded-md p-4 mt-4 border">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium">Add New Label</h3>
                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1 rounded-md">Add</button>
                    </div>
                    <p>To add a new label, click the Add button.</p>
                </div>
                
                <div className="bg-card rounded-md p-4 mt-4 border">
                    <h3 className="font-medium mb-2">Existing Labels</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 rounded-md px-2 py-1 text-sm">Best Seller</span>
                        <span className="bg-green-100 text-green-800 rounded-md px-2 py-1 text-sm">Special Discount</span>
                        <span className="bg-red-100 text-red-800 rounded-md px-2 py-1 text-sm">New</span>
                        <span className="bg-purple-100 text-purple-800 rounded-md px-2 py-1 text-sm">In Stock</span>
                        <span className="bg-yellow-100 text-yellow-800 rounded-md px-2 py-1 text-sm">Deal of the Day</span>
                        <span className="bg-gray-100 text-gray-800 rounded-md px-2 py-1 text-sm">Out of Stock</span>
                    </div>
                </div>
            </div>
        </div>
    )
}