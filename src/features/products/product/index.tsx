export default function ProductContent() {
    return (
        <div className="space-y-4 w-full">
            <div className="rounded-md border p-4">
                <h2 className="text-xl font-semibold mb-2">Product List</h2>
                <p className="text-muted-foreground">
                    In this section, you can view and manage the list of all products.
                </p>
                
                <div className="bg-card rounded-md p-4 mt-4 border">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium">Add New Product</h3>
                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1 rounded-md">Add</button>
                    </div>
                    <p>To add a new product, click the Add button.</p>
                </div>
                
                <div className="bg-card rounded-md p-4 mt-4 border">
                    <h3 className="font-medium mb-2">Recent Products</h3>
                    <ul className="space-y-2">
                        <li className="p-2 hover:bg-muted rounded-md flex justify-between">
                            <span>Samsung Mobile Phone</span>
                            <span className="text-muted-foreground">12,000,000 Toman</span>
                        </li>
                        <li className="p-2 hover:bg-muted rounded-md flex justify-between">
                            <span>Asus Laptop</span>
                            <span className="text-muted-foreground">32,000,000 Toman</span>
                        </li>
                        <li className="p-2 hover:bg-muted rounded-md flex justify-between">
                            <span>Apple Tablet</span>
                            <span className="text-muted-foreground">25,000,000 Toman</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
