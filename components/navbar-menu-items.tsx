'use client'
import { APP_SETTINGS } from '@/constants'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FC } from 'react'

interface NavbarMenuItemsProps {
    items: {
        collection: string
        name: LocalizationType
    }[]
}

export const NavbarMenuItems: FC<NavbarMenuItemsProps> = (props): JSX.Element => {
    const params = useParams()

    return (
        <>
            {props.items.map((item, index) => {
                const activeClassName =
                    params.slug === item.collection ? 'text-black underline' : ''

                return (
                    <Link
                        key={index}
                        href={`${APP_SETTINGS.DASHBOARD_PATH}/${item.collection}`}
                        className={`text-muted-foreground transition-colors hover:text-foreground ${activeClassName}`}
                        prefetch={false}
                    >
                        {item.name.en}
                    </Link>
                )
            })}
        </>
    )
}
