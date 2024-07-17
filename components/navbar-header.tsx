import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { PanelLeft } from 'lucide-react'
import NavBar from '@/components/navbar'
import NavbarSearch from '@/components/navbar-search'
import NavbarUserInfo from '@/components/navbar-user-info'
import NavbarBranding from './navbar-branding'

export default function NavBarHeader() {
    return (
        <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size='icon' variant='outline' className='sm:hidden'>
                        <PanelLeft className='h-5 w-5' />
                        <span className='sr-only'>Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side='left' className='sm:max-w-xs'>
                    <NavBar variant='mobile' />
                </SheetContent>
            </Sheet>
            <NavbarBranding />
            <div className='flex items-center ml-auto gap-4'>
                <NavbarSearch />
                <NavbarUserInfo />
            </div>
        </header>
    )
}
