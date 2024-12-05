'use client'
import { FC, useActionState, useEffect } from 'react'
import { updateCollection, createCollection } from '@/app/actions'
import { FormSubmitButton } from '@/components/form-submit-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { APP_SETTINGS } from '@/constants'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import Link from 'next/link'

export const FormCollection: FC<FormCollectionProps> = (props): JSX.Element => {
    const collection = props.data
    const currentFormAction = collection ? updateCollection : createCollection
    const [state, formAction] = useActionState(currentFormAction, null)

    useEffect(() => {
        if (state) {
            toast.success(state)
            redirect(
                `${APP_SETTINGS.DASHBOARD_PATH}/collections/${collection ? collection.id : ''}`
            )
        }
    }, [state])

    return (
        <form action={formAction}>
            {collection && (
                <input type='hidden' name='id' defaultValue={collection.id} id={collection.id} />
            )}
            <Card className='mx-auto w-full max-w-screen-lg'>
                <CardHeader>
                    <CardTitle>Update Collection</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='grid w-full items-center gap-4'>
                        <div className='flex flex-col space-y-1.5'>
                            <Label htmlFor='title'>Title</Label>
                            <Input
                                id='title'
                                name='title'
                                defaultValue={collection?.title}
                                required
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <div className='flex gap-2'>
                        <Button variant='outline' asChild>
                            <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/collections`}>Cancel</Link>
                        </Button>
                        {collection && <Button variant='destructive'>Delete</Button>}
                    </div>
                    <FormSubmitButton>{collection ? 'Update' : 'Add'}</FormSubmitButton>
                </CardFooter>
            </Card>
        </form>
    )
}
