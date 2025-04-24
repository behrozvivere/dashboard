import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * تبدیل متن به slug برای استفاده در URL
 * این تابع کاراکترهای غیر مجاز را حذف کرده و فاصله‌ها را با خط تیره جایگزین می‌کند
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // جایگزین کردن فاصله‌ها با خط تیره
    .replace(/[^\w\-]+/g, '')    // حذف کاراکترهای غیر مجاز
    .replace(/\-\-+/g, '-')      // جایگزین کردن چند خط تیره پشت سر هم با یک خط تیره
    .replace(/^-+/, '')          // حذف خط تیره از ابتدای متن
    .replace(/-+$/, '')          // حذف خط تیره از انتهای متن
}
