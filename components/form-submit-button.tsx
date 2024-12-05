'use client'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

export const FormSubmitButton: FC<PropsWithChildren> = (props): JSX.Element => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} type='submit'>
            {props.children}
        </Button>
    )
}
