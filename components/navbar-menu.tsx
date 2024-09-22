import Link from 'next/link'
import Icon from '@/components/icon'
import { APP_SETTINGS } from '@/constants'
import { FC } from 'react'

const NavbarMenu: FC<NavbarMenuProps> = (props): JSX.Element => {
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
                return (
                    <Link
                        key={index}
                        href={`${APP_SETTINGS.DASHBOARD_PATH}/${item.id}`}
                        className='text-muted-foreground transition-colors hover:text-foreground'
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
