'use client'
import i18nConfig from '../i18nConfig'
import { useParams, usePathname } from 'next/navigation'
import { localizedUrl } from '@/lib'

export const NavBarLanguage = () => {
    const pathname = usePathname()
    const params = useParams()

    return (
        <div className='navbar-locales flex gap-4'>
            {i18nConfig.locales.map((locale) => {
                const isActive = params.locale === locale ? `underline` : ``
                return (
                    <span key={locale} className={isActive}>
                        <a href={localizedUrl(pathname, locale)}>{locale}</a>
                    </span>
                )
            })}
        </div>
    )
}

export default NavBarLanguage
