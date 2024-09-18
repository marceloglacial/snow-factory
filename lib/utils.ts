import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const formataData = (data: any, locale: string): ContentTableData => {
    const result: ContentTableItem[] = data.data.map((item: any) => {
        return {
            id: item.id,
            title: item.title[`${locale}`],
            status: 'published',
            updatedAt: item.updatedAt
        }
    })

    return {
        total: data.total,
        items: result
    }
}
