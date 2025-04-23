export default function ProductContent() {
  return (
    <div className="space-y-4 w-full">
      <div className="rounded-md border p-4">
        <h2 className="text-xl font-semibold mb-2">لیست محصولات</h2>
        <p className="text-muted-foreground">
          در این بخش می‌توانید لیست تمامی محصولات را مشاهده و مدیریت کنید.
        </p>
        
        <div className="bg-card rounded-md p-4 mt-4 border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">افزودن محصول جدید</h3>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1 rounded-md">افزودن</button>
          </div>
          <p>برای افزودن محصول جدید، روی دکمه افزودن کلیک کنید.</p>
        </div>
        
        <div className="bg-card rounded-md p-4 mt-4 border">
          <h3 className="font-medium mb-2">محصولات اخیر</h3>
          <ul className="space-y-2">
            <li className="p-2 hover:bg-muted rounded-md flex justify-between">
              <span>گوشی موبایل سامسونگ</span>
              <span className="text-muted-foreground">12,000,000 تومان</span>
            </li>
            <li className="p-2 hover:bg-muted rounded-md flex justify-between">
              <span>لپ تاپ ایسوس</span>
              <span className="text-muted-foreground">32,000,000 تومان</span>
            </li>
            <li className="p-2 hover:bg-muted rounded-md flex justify-between">
              <span>تبلت اپل</span>
              <span className="text-muted-foreground">25,000,000 تومان</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
