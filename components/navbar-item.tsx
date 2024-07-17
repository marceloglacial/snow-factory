import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { FC } from 'react'
import Link from 'next/link'
import Icon from '@/components/icon'

const NavBarItem: FC<NavbarItem> = (props): JSX.Element => {
    const isActive = props.active ? `bg-accent` : ''
    const stylesMobile = `flex h-9 gap-3 items-center px-4 py-2 rounded-lg text-muted-foreground transition-colors ${isActive}`
    const stylesDesktop = `md:w-9 md:justify-center md:px-0 md:py-0 hover:text-foreground ${isActive}`

    return (
        <div className='navbar-item'>
            <div className='navbar-item__desktop'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={`/admin/${props.slug.en}`}
                            className={`${stylesMobile} ${stylesDesktop}`}
                        >
                            <Icon icon={props.icon} />
                            <span className='md:sr-only'>{props.name.en}</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side='right'>{props.name.en}</TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}

export default NavBarItem
