import RichTextEditor from '@/components/richtext-editor'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { APP_SETTINGS } from '@/constants'
import { getContentDataById } from '@/lib/contentType'
import { UploadIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const EditPage = async ({ params }: { params: { slug: string[] } }) => {
    const pageSlug = params.slug[0]
    const pageId = params.slug[1]
    const pageLocale = params.slug[2]

    const response = await getContentDataById(pageSlug, pageId)
    const data = response.data

    return (
        <div className='grid flex-1 items-start gap-4'>
            <div className='grid flex-1 auto-rows-max gap-4'>
                <div className='flex items-center gap-4'>
                    <h1 className='flex-1 shrink-0 whitespace-nowrap text-4xl font-semibold tracking-tight sm:grow-0'>
                        Edit Item
                    </h1>
                    <div className='hidden items-center gap-2 md:ml-auto md:flex'>
                        <Button variant='outline' size='sm' asChild>
                            <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/${pageSlug}`}>Discard</Link>
                        </Button>
                        <Button size='sm'>Save</Button>
                    </div>
                </div>
                <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
                    <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
                        <Card x-chunk='dashboard-07-chunk-0'>
                            <CardHeader>
                                <CardTitle>Details</CardTitle>
                                <CardDescription>Id: {pageId}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='grid gap-6'>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='name'>Name</Label>
                                        <Input
                                            id='name'
                                            type='text'
                                            className='w-full'
                                            defaultValue={data.title[pageLocale]}
                                        />
                                    </div>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='description'>Description</Label>
                                        <RichTextEditor content={data.content[`${pageLocale}`]} />
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
                                <CardTitle>Thumbnail</CardTitle>
                                <CardDescription>
                                    Lipsum dolor sit amet, consectetur adipiscing elit
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='grid gap-2'>
                                    <Image
                                        alt='Product image'
                                        className='aspect-square w-full rounded-md object-cover'
                                        height='300'
                                        src={data.image.src}
                                        width='300'
                                        priority
                                    />
                                    <div className=''>
                                        <button className='flex w-full items-center justify-center rounded-md border border-dashed p-4'>
                                            <UploadIcon className='h-4 w-4 text-muted-foreground' />
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
                                <div />
                                <Button size='sm' variant='secondary'>
                                    Archive Product
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 md:hidden'>
                    <Button variant='outline' size='sm'>
                        Discard
                    </Button>
                    <Button size='sm'>Save Product</Button>
                </div>
            </div>
        </div>
    )
}
export default EditPage
