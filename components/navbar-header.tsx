'use client'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { PanelLeft, SearchIcon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import NavBar from '@/components/navbar'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

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
            <Breadcrumb className='hidden md:flex'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='/admin' className='font-bold'>
                                Dashboard
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex items-center ml-auto gap-4'>
                <div className='relative ml-auto flex-1 md:grow-0'>
                    <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                    <Input
                        type='search'
                        placeholder='Search...'
                        className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]'
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant='outline'
                            size='icon'
                            className='overflow-hidden rounded-full'
                        >
                            Image
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link className='w-full' href='/'>
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
