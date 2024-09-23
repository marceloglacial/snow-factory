'use client'
import Link from 'next/link'
import Icon from '@/components/icon'
import { APP_SETTINGS } from '@/constants'
import { FC } from 'react'
import { useParams } from 'next/navigation'

const NavbarMenu: FC<NavbarMenuProps> = (props): JSX.Element => {
    const params = useParams()

    return (
        <nav className='navbar-menu hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
            <Link
                href={APP_SETTINGS.DASHBOARD_PATH}
                className='flex items-center gap-2 text-lg font-semibold md:text-base'
                prefetch={false}
            >
                <Icon icon='home' />
                <span className='sr-only'>Home</span>
            </Link>
            <Link
                href={APP_SETTINGS.DASHBOARD_PATH}
                className='text-foreground transition-colors hover:text-foreground'
                prefetch={false}
            >
                Dashboard
            </Link>
            {props.items.map((item, index) => {
                const isActive =
                    params.collection === item.id
                        ? `text-foreground underline`
                        : `text-muted-foreground`
                return (
                    <Link
                        key={index}
                        href={`${APP_SETTINGS.DASHBOARD_PATH}/${item.id}`}
                        className={`transition-colors hover:text-foreground ${isActive}`}
                        prefetch={false}
                    >
                        {item.title}
                    </Link>
                )
            })}
        </nav>
    )
}
export default NavbarMenu
