import Navbar from '@/components/navbar'
import { getCollections } from '@/lib'

export default async function RootLayout({ children, params }: Readonly<RootLayoutProps>) {
    const data = await getCollections(params.locale)

    if ('error' in data.status) return <>Error: {data.status.message}</>

    const navbarMenu = data.data

    return (
        <div className='flex min-h-screen w-full flex-col'>
            <Navbar menu={navbarMenu} />
            <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 w-full max-w-screen-2xl mx-auto'>
                {children}
            </main>
        </div>
    )
}
