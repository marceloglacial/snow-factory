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

const ContentPage: FC<PageParamsProps> = async (props): Promise<JSX.Element> => {
    const result = (await getCollectionById('collections', 'title')) as ApiResponse<
        CollectionType[]
    >
    const collections = result.data as CollectionType[]

    return (
        <Card className='relative'>
            <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription></CardDescription>
                List of all defined content types in your application
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {collections.map((collection) => (
                            <TableRow key={collection.id}>
                                <TableCell>
                                    <Link
                                        href={`${APP_SETTINGS.DASHBOARD_PATH}/content/${collection.id}`}
                                        className='flex'
                                    >
                                        {collection.title}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
export default ContentPage
