import { updateCollection } from '@/app/actions'
import { FormSubmitButton } from '@/components/form-submit-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { APP_SETTINGS } from '@/constants'
import { deleteDocFromCollection, getDocumentById } from '@/lib/db'
import Link from 'next/link'
import { FC } from 'react'

const CollectionPage: FC<CollectionPageProps> = async (props): Promise<JSX.Element> => {
    const params = await props.params
    const result = await getDocumentById('collections', params.id)
    const collection = result.data as CollectionType

    return (
        <form action={updateCollection}>
            <input type='hidden' name='id' defaultValue={collection.id} id={collection.id} />
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
                                defaultValue={collection.title}
                                required
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <div className='flex gap-2'>
                        <Button variant='outline' asChild>
                            <Link href={APP_SETTINGS.DASHBOARD_PATH}>Cancel</Link>
                        </Button>
                        <Button variant='destructive'>Delete</Button>
                    </div>
                    <FormSubmitButton>Update</FormSubmitButton>
                </CardFooter>
            </Card>
        </form>
    )
}
export default CollectionPage
