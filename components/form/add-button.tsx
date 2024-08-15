'use client'
import { CirclePlusIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { FC } from 'react'
import Link from 'next/link'
import { APP_SETTINGS } from '@/constants'

interface AddButtonProps {
    path: string
}

export const AddButton: FC<AddButtonProps> = (props): JSX.Element => {
    return (
        <Link href={`${APP_SETTINGS.ADD_PATH}/${props.path}`}>
            <Button size='sm' className='h-8 gap-1'>
                <CirclePlusIcon className='h-3.5 w-3.5' />
                <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add item</span>
            </Button>
        </Link>
    )
}
