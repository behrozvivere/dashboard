export default function CategoriesContent() {
    return (
        <div className="space-y-4 w-full">
            <div className="rounded-md border p-4">
                <h2 className="text-xl font-semibold mb-2">Product Categories</h2>
                <p className="text-muted-foreground">
                    In this section, you can manage product categories.
                </p>
                
                <div className="bg-card rounded-md p-4 mt-4 border">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium">Add New Category</h3>
                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1 rounded-md">Add</button>
                    </div>
                    <p>To add a new category, click the Add button.</p>
                </div>
                
                <div className="bg-card rounded-md p-4 mt-4 border">
                    <h3 className="font-medium mb-2">Existing Categories</h3>
                    <ul className="space-y-2">
                        <li className="p-2 hover:bg-muted rounded-md flex justify-between">
                            <span>Mobile and Tablets</span>
                            <div>
                                <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                                <button className="text-red-500 hover:text-red-700">Delete</button>
                            </div>
                        </li>
                        <li className="p-2 hover:bg-muted rounded-md flex justify-between">
                            <span>Laptops and Computers</span>
                            <div>
                                <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                                <button className="text-red-500 hover:text-red-700">Delete</button>
                            </div>
                        </li>
                        <li className="p-2 hover:bg-muted rounded-md flex justify-between">
                            <span>Accessories</span>
                            <div>
                                <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                                <button className="text-red-500 hover:text-red-700">Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}