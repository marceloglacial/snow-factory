import Aside from '@/components/aside'
import NavBarHeader from '@/components/navbar-header'
import TooltipWrapper from '@/components/tooltip-wrapper'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <TooltipWrapper>
            <div className='flex min-h-screen w-full flex-col bg-muted/40'>
                <Aside />
                <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
                    <NavBarHeader />
                    <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
                        {children}
                    </main>
                </div>
            </div>
        </TooltipWrapper>
    )
}
