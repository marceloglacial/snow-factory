import { FC } from 'react'
import { APP_SETTINGS } from '@/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SaveButtonProps {
    id: string
}

export const SaveButton: FC<SaveButtonProps> = (props): JSX.Element => {
    return (
        <Button size='sm' asChild>
            <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/save/${props.id}`}>Save</Link>
        </Button>
    )
}
