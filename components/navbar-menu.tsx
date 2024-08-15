import Link from 'next/link'
import Icon from '@/components/icon'
import { APP_SETTINGS, DATA } from '@/constants'
import { getDataByType, getSiteInfo } from '@/lib'
import { Alert } from '@/components/ui/alert'
import { NavbarMenuItems } from './navbar-menu-items'

const NavbarMenu = async () => {
    const siteInfo = await getSiteInfo()
    const result = await getDataByType(DATA.CONTENT_TYPE)
    const menuItems = result.data

    return (
        <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
            <Link
                href={APP_SETTINGS.DASHBOARD_PATH}
                className='flex items-center gap-2 text-lg font-semibold md:text-base'
                prefetch={false}
            >
                <Icon icon='home' />
                <span className='sr-only'>{siteInfo.name}</span>
            </Link>
            <Link
                href={APP_SETTINGS.DASHBOARD_PATH}
                className='text-foreground transition-colors hover:text-foreground'
                prefetch={false}
            >
                Dashboard
            </Link>
            {result.error && (
                <Alert variant='destructive' className='py-2'>
                    {result.message}
                </Alert>
            )}
            <NavbarMenuItems items={menuItems} />
        </nav>
    )
}
export default NavbarMenu
