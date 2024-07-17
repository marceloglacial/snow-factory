import { FC } from 'react'
import NavBarItem from '@/components/navbar-item'
import { getContenttypes } from '@/lib/contentType'

const NavBar: FC<NavBarProps> = async ({ variant }): Promise<JSX.Element> => {
    const isMobile = variant === 'mobile'
    const fontStyle = `text-lg font-medium`

    const navbarStyles = {
        desktop: `flex flex-col items-center gap-4 px-2 sm:py-5`,
        mobile: `grid gap-4 text-lg font-medium ${fontStyle} mt-8`,
    }

    const items = (await getContenttypes()) as NavbarItem[]

    return (
        <>
            <nav className={navbarStyles[variant]}>
                <NavBarItem name={{ en: 'Home' }} slug={{ en: '/' }} icon={'home'} />
                {items.map((item, index) => (
                    <NavBarItem key={index} {...item} />
                ))}
            </nav>
            <nav
                className={
                    isMobile
                        ? `${fontStyle} mt-4`
                        : 'mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'
                }
            >
                <NavBarItem name={{ en: 'Users' }} slug={{ en: 'users' }} icon={'users'} />
                <NavBarItem name={{ en: 'Settings' }} slug={{ en: 'settings' }} icon={'settings'} />
            </nav>
        </>
    )
}

export default NavBar
