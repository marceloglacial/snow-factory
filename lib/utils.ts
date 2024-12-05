import { APP_SETTINGS } from '@/constants'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const normalizeData = (formData: FormData) => {
    return Object.fromEntries(
        Array.from(formData.entries()).filter(([key]) => !key.startsWith('$ACTION_'))
    )
}

export const localizedContent = (
    content: Content,
    locale?: string,
): any => {
    const fallbackLocale: string = APP_SETTINGS.DEFAULT_LOCALE
    return Object.keys(content).reduce((acc: LocalizedContent, key: string) => {
        const value = content[key];

        if (typeof value === 'object') {
            acc[key] = value[locale || fallbackLocale] || value;
        } else {
            acc[key] = value;
        }
        return acc;
    }, {});
};

export const localizedData = (data: any, locale?: string): any => data.map((item: Content) => localizedContent(item, locale))

export const localizedUrl = (pathname: string, newLocale: string): string => {
    const localePattern = /^\/[a-z]{2}-[A-Z]{2}/

    return localePattern.test(pathname)
        ? pathname.replace(localePattern, `/${newLocale}`)
        : `/${newLocale}${pathname}`
}
