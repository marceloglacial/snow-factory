import { FC } from 'react'
import { APP_SETTINGS } from '@/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface DiscardButtonProps {
    slug: string
}

export const DiscardButton: FC<DiscardButtonProps> = (props): JSX.Element => {
    return (
        <Button variant='outline' size='sm' asChild>
            <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/${props.slug}`}>Cancel</Link>
        </Button>
    )
}
