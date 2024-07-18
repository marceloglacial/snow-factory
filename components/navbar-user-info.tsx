import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { APP_SETTINGS } from '@/constants'

const NavbarUserInfo = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon' className='overflow-hidden rounded-full'>
                    Image
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuItem>
                    <Link href={`${APP_SETTINGS.USERS_PATH}`} className='w-full' prefetch={false}>
                        Users
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={APP_SETTINGS.SETTINGS_PATH} className='w-full' prefetch={false}>
                        Settings
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link className='w-full' href='/'>
                        Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NavbarUserInfo
