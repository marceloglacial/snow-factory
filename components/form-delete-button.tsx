'use client'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { FC, PropsWithChildren, useActionState, useEffect, useState } from 'react'
import { APP_SETTINGS } from '@/constants'
import { toast } from 'sonner'
import { redirect, useParams } from 'next/navigation'
import { deleteCollection } from '@/app/actions'

interface FormDeleteButtonProps extends PropsWithChildren {
    collectionId: string
}
export const FormDeleteButton: FC<FormDeleteButtonProps> = (props): JSX.Element => {
    const params = useParams() as ParamsType
    const { pending } = useFormStatus()
    const [state, formAction] = useActionState(deleteCollection, null)

    useEffect(() => {
        if (state) {
            toast.warning(state)
            redirect(`${APP_SETTINGS.DASHBOARD_PATH}/${params.slug}`)
        }
    }, [state])

    return (
        <form action={formAction} className='absolute bottom-6 left-6'>
            <input
                type='hidden'
                name='id'
                defaultValue={props.collectionId}
                id={props.collectionId}
            />
            <Button
                variant='destructive'
                disabled={pending}
                type='submit'
                onClick={(e) => {
                    if (!confirm('Are you sure you want to delete this collection?')) {
                        e.preventDefault()
                    }
                }}
            >
                {props.children}
            </Button>
        </form>
    )
}
