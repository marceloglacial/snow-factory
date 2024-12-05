import NavbarUserInfo from '@/components/navbar-user-info'
import NavbarMenu from '@/components/navbar-menu'
import { FC } from 'react'

const Navbar: FC = (): JSX.Element => {
    return (
        <header className='navbar sticky top-0 border-b bg-background z-50'>
            <div className=' flex h-16 items-center gap-4 px-4 md:px-6 w-auto max-w-screen-2xl mx-auto'>
                <NavbarMenu />
                <div className='flex items-center ml-auto gap-4'>
                    <NavbarUserInfo />
                </div>
            </div>
        </header>
    )
}
export default Navbar
