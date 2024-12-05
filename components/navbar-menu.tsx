import Link from 'next/link'
import Icon from '@/components/icon'
import { APP_SETTINGS } from '@/constants'
import { FC } from 'react'

const NavbarMenu: FC = (): JSX.Element => {
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
            <div className='h-4 w-[1px] bg-border md:h-5' />
            <Link
                href={`${APP_SETTINGS.DASHBOARD_PATH}/collections`}
                className='text-foreground transition-colors hover:text-foreground'
                prefetch={false}
            >
                Collections
            </Link>
        </nav>
    )
}
export default NavbarMenu
