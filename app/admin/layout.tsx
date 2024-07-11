'use client'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { PanelLeft } from 'lucide-react'
import { TooltipProvider } from '@/components/ui/tooltip'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <TooltipProvider>
            <div className='flex min-h-screen w-full flex-col bg-muted/40'>
                <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
                    <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size='icon' variant='outline' className='sm:hidden'>
                                    <PanelLeft className='h-5 w-5' />
                                    <span className='sr-only'>Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side='left' className='sm:max-w-xs'>
                                <div>Navbar mobile</div>
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
                        <div className='flex items-center ml-auto'>
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
                    <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
                        {children}
                    </main>
                </div>
            </div>
            <Toaster position='top-center' richColors closeButton />
        </TooltipProvider>
    )
}
