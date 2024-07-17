import NavBar from './navbar'

const Aside = () => {
    return (
        <aside className='fixed inset-y-0 left-0 z-50 hidden w-14 flex-col border-r bg-background sm:flex'>
            <NavBar variant='desktop' />
        </aside>
    )
}
export default Aside
