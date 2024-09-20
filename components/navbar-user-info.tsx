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
import { users } from '@/mocks'

const NavbarUserInfo = () => {
    return (
        <div className='navbar-user-info'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' size='icon' className='overflow-hidden rounded-full'>
                        <img src={users[0].avatar} alt={''} className='w-full h-full' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuItem>
                        <Link
                            href={`${APP_SETTINGS.USERS_PATH}`}
                            className='w-full'
                            prefetch={false}
                        >
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
        </div>
    )
}

export default NavbarUserInfo
