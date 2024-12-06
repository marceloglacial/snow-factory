import { FC } from 'react'
import { getCollectionById } from '@/lib/db'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { APP_SETTINGS } from '@/constants'
import Link from 'next/link'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

const AllCollectionPage: FC<PageParamsProps> = async (props): Promise<JSX.Element> => {
    const params = await props.params
    const result = (await getCollectionById(params.slug, 'title')) as ApiResponse<CollectionType[]>
    const collections = result.data as CollectionType[]

    return (
        <Card className='relative'>
            <div className='absolute top-8 right-8'>
                <Button asChild>
                    <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/${params.slug}/new`}>
                        Add Collection
                    </Link>
                </Button>
            </div>
            <CardHeader>
                <CardTitle>Collections</CardTitle>
                <CardDescription>You have {collections.length} items.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead className='w-[100px]'>ID</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {collections.map((collection) => (
                            <TableRow key={collection.id}>
                                <TableCell>
                                    <Link
                                        href={`${APP_SETTINGS.DASHBOARD_PATH}/${params.slug}/${collection.id}`}
                                        className='flex'
                                    >
                                        {collection.title}
                                    </Link>
                                </TableCell>
                                <TableCell className='font-medium'>{collection.id}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
export default AllCollectionPage
