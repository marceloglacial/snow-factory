import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { getCollectionById } from '@/lib/db'
import { APP_SETTINGS } from '@/constants'

export const NavbarCollections = async () => {
    const result = (await getCollectionById('collections')) as ApiResponse<CollectionType[]>
    const items = result.data

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='text-foreground transition-colors hover:text-foreground'>
                Collections
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {items.map((item) => (
                    <DropdownMenuItem key={item.id}>
                        <Link
                            href={`${APP_SETTINGS.DASHBOARD_PATH}/collections/${item.id}`}
                            className='w-full'
                        >
                            {item.title}
                        </Link>
                    </DropdownMenuItem>
                ))}
                {items.length > 0 && <DropdownMenuSeparator />}
                <DropdownMenuItem>
                    <Link
                        href={`${APP_SETTINGS.DASHBOARD_PATH}/collections/new`}
                        className='w-full'
                    >
                        Add Collection
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
