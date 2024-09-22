'use client'
import Link from 'next/link'
import i18nConfig from '../i18nConfig'
import { usePathname } from 'next/navigation'
import { localizedUrl } from '@/lib'

export const NavBarLanguage = () => {
    const pathname = usePathname()

    return (
        <div className='navbar-locales flex gap-4'>
            {i18nConfig.locales.map((locale) => {
                return (
                    <span key={locale}>
                        <Link href={localizedUrl(pathname, locale)}>{locale}</Link>
                    </span>
                )
            })}
        </div>
    )
}

export default NavBarLanguage
