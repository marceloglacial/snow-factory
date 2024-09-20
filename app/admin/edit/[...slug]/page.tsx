import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { APP_SETTINGS } from '@/constants'
import { getCollectionById, getContentById } from '@/lib'
import { ChevronLeft, Upload } from 'lucide-react'
import Link from 'next/link'

const EditPage = async ({ params }: { params: { slug: string[] } }) => {
    const [locale, collectionId, contentId] = params.slug
    const collection = await getCollectionById(collectionId, locale)
    const content = await getContentById(collectionId, contentId, locale)

    if ('error' in collection.status) return <>Error: {collection.status.message}</>

    return (
        <>
            <div className='mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4'>
                <div className='flex items-center gap-4'>
                    <Button variant='outline' size='icon' className='h-7 w-7' asChild>
                        <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/${locale}/${collectionId}`}>
                            <ChevronLeft className='h-4 w-4' />
                            <span className='sr-only'>Back</span>
                        </Link>
                    </Button>
                    <h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
                        {collection.data.title}
                    </h1>
                    <div className='hidden items-center gap-2 md:ml-auto md:flex'>
                        <Button variant='outline' size='sm' asChild>
                            <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/${locale}/${collectionId}`}>
                                Discard
                            </Link>
                        </Button>
                        <Button size='sm'>Save</Button>
                    </div>
                </div>
                <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
                    <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
                        <Card x-chunk='dashboard-07-chunk-0'>
                            <CardHeader>
                                <CardTitle>Edit ID: {content.data.id}</CardTitle>
                                <CardDescription>
                                    Lipsum dolor sit amet, consectetur adipiscing elit
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='grid gap-6'>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='name'>
                                            {collection.data.fields[0].label}
                                        </Label>
                                        <Input
                                            id='name'
                                            type='text'
                                            className='w-full'
                                            defaultValue={content.data.title}
                                        />
                                    </div>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='description'>Description</Label>
                                        <Textarea
                                            id='description'
                                            defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.'
                                            className='min-h-32'
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='grid auto-rows-max items-start gap-4 lg:gap-8'>
                        <Card x-chunk='dashboard-07-chunk-3'>
                            <CardHeader>
                                <CardTitle>Product Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='grid gap-6'>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='status'>Status</Label>
                                        <Select>
                                            <SelectTrigger id='status' aria-label='Select status'>
                                                <SelectValue placeholder='Select status' />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='draft'>Draft</SelectItem>
                                                <SelectItem value='published'>Active</SelectItem>
                                                <SelectItem value='archived'>Archived</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='overflow-hidden' x-chunk='dashboard-07-chunk-4'>
                            <CardHeader>
                                <CardTitle>Product Images</CardTitle>
                                <CardDescription>
                                    Lipsum dolor sit amet, consectetur adipiscing elit
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='grid gap-2'>
                                    Image{' '}
                                    <div className='grid grid-cols-3 gap-2'>
                                        <button>Image</button>
                                        <button>Image</button>
                                        <button className='flex aspect-square w-full items-center justify-center rounded-md border border-dashed'>
                                            <Upload className='h-4 w-4 text-muted-foreground' />
                                            <span className='sr-only'>Upload</span>
                                        </button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card x-chunk='dashboard-07-chunk-5'>
                            <CardHeader>
                                <CardTitle>Archive Product</CardTitle>
                                <CardDescription>
                                    Lipsum dolor sit amet, consectetur adipiscing elit.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div></div>
                                <Button size='sm' variant='secondary'>
                                    Archive Product
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 md:hidden'>
                    <Button variant='outline' size='sm' asChild>
                        <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/${locale}/${collectionId}`}>
                            Discard
                        </Link>
                    </Button>
                    <Button size='sm'>Save Product</Button>
                </div>
            </div>
        </>
    )
}
export default EditPage
