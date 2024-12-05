import Navbar from '@/components/navbar'

export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <div className='flex min-h-screen w-full flex-col'>
            <Navbar />
            <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 w-full max-w-screen-2xl mx-auto'>
                {children}
            </main>
        </div>
    )
}
