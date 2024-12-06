import { FC } from 'react'
import { getCollectionById, getDocumentById } from '@/lib/db'
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
import { Separator } from '@/components/ui/separator'

const ContentPage: FC<PageParamsProps> = async (props): Promise<JSX.Element> => {
    const params = await props.params

    const result = (await getCollectionById(params.slug, 'title')) as ApiResponse<CollectionType[]>
    const pageResult = await getDocumentById('collections', params.slug)

    const collections = result.data as CollectionType[]
    const page = pageResult.data as CollectionType

    const hasCollections = collections.length > 0

    return (
        <Card className='relative'>
            {hasCollections && (
                <div className='absolute top-8 right-8'>
                    <AddButton params={params} />
                </div>
            )}
            <CardHeader>
                <CardTitle>{page.title}</CardTitle>
                <CardDescription>You have {collections.length} items.</CardDescription>
            </CardHeader>
            <CardContent>
                {hasCollections ? (
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
                ) : (
                    <AddButton params={params} />
                )}
            </CardContent>
        </Card>
    )
}
export default ContentPage

const AddButton = ({ params }: PageParamsProps) => {
    return (
        <Button asChild>
            <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/content/${params.slug}/new`}>
                Add content
            </Link>
        </Button>
    )
}
