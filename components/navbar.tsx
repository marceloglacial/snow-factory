import NavbarSearch from '@/components/navbar-search'
import NavbarUserInfo from '@/components/navbar-user-info'
import NavbarMenu from './navbar-menu'

export default function Navbar() {
    return (
        <header className='sticky top-0 border-b bg-background'>
            <div className=' flex h-16 items-center gap-4 px-4 md:px-6 w-auto max-w-screen-2xl mx-auto'>
                <NavbarMenu />
                <div className='flex items-center ml-auto gap-4'>
                    <NavbarSearch />
                    <NavbarUserInfo />
                </div>
            </div>
        </header>
    )
}
