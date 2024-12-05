'use client'
import { createCollection } from '@/app/actions'
import { FormSubmitButton } from '@/components/form-submit-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function CollectionsPageNew() {
    return (
        <form action={createCollection}>
            <Card className='mx-auto w-full max-w-screen-lg'>
                <CardHeader>
                    <CardTitle>New Collection</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='grid w-full items-center gap-4'>
                        <div className='flex flex-col space-y-1.5'>
                            <Label htmlFor='title'>Title</Label>
                            <Input
                                id='title'
                                name='title'
                                placeholder='Name of your collection'
                                required
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <Button variant='outline' asChild>
                        <Link href='#' onClick={() => history.back()}>
                            Cancel
                        </Link>
                    </Button>
                    <FormSubmitButton>Add Collection</FormSubmitButton>
                </CardFooter>
            </Card>
        </form>
    )
}
