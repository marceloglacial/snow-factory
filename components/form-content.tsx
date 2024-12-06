'use client'
import { FC, useActionState, useEffect } from 'react'
import { updateCollection, createCollection } from '@/app/actions'
import { FormSubmitButton } from '@/components/form-submit-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { APP_SETTINGS } from '@/constants'
import { redirect, useParams } from 'next/navigation'
import { toast } from 'sonner'
import Link from 'next/link'
import { FormDeleteButton } from './form-delete-button'

export const FormContent: FC<FormProps> = (props): JSX.Element => {
    const params = useParams() as ParamsType
    const collection = props.data
    const currentFormAction = collection ? updateCollection : createCollection
    const [state, formAction] = useActionState(currentFormAction, null)

    useEffect(() => {
        if (state) {
            toast.success(state)
            redirect(
                `${APP_SETTINGS.DASHBOARD_PATH}/${params.slug}/${collection ? collection.id : ''}`
            )
        }
    }, [state])

    return (
        <div className='relative'>
            <form action={formAction}>
                {collection && (
                    <input
                        type='hidden'
                        name='id'
                        defaultValue={collection.id}
                        id={collection.id}
                    />
                )}
                <Card>
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
                            <div className='flex flex-col space-y-1.5'>
                                <Label htmlFor='title'>Slug</Label>
                                <Input
                                    id='slub'
                                    name='slug'
                                    defaultValue={collection?.slug}
                                    required
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className='flex gap-4 justify-end'>
                        <Button variant='outline' asChild>
                            <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/content`}>Cancel</Link>
                        </Button>
                        <FormSubmitButton>{collection ? 'Update' : 'Add'}</FormSubmitButton>
                    </CardFooter>
                </Card>
            </form>
            {collection && <FormDeleteButton collectionId={collection.id}>Delete</FormDeleteButton>}
        </div>
    )
}
