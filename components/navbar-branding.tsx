import Link from 'next/link'

const NavbarBranding = () => {
    return (
        <div className='navbar-branding text-lg font-bold'>
            <Link href={'/admin'}>Snow Factory</Link>
        </div>
    )
}
export default NavbarBranding
