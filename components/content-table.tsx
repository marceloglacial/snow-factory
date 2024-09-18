import { FC } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card'
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '@/components/ui/table'
import Link from 'next/link'

const ContentTable: FC<IContentTable> = (props): JSX.Element => {
    const hasItems = props.data.items.length > 0
    return (
        <Card x-chunk='dashboard-06-chunk-0'>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                {props.description && <CardDescription>{props.description}</CardDescription>}
            </CardHeader>
            <CardContent>
                {!hasItems && (
                    <div className='flex flex-col items-center gap-1 text-center border-t pt-8'>
                        <h3 className='text-2xl font-bold tracking-tight'>No items to display.</h3>
                        <p className='text-sm text-muted-foreground'>
                            You can add a new one using the button below.
                        </p>
                        <Button className='mt-4'>Add item</Button>
                    </div>
                )}
                {hasItems && (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-auto'>Title</TableHead>
                                <TableHead className='w-32'>Status</TableHead>
                                <TableHead className=' w-1/4'>Updated at</TableHead>
                                <TableHead className='w-[100px]'>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {props.data.items.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className='font-medium'>{item.title}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>{item.updatedAt}</TableCell>
                                    <TableCell>
                                        <div className='flex gap-2'>
                                            <Button variant='outline' size='icon' asChild>
                                                <Link href={`./edit/${item.id}`}>
                                                    <Pencil className='h-4 w-4' />
                                                </Link>
                                            </Button>
                                            <Button variant='outline' size='icon'>
                                                <Trash2 className='h-4 w-4' />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
            {hasItems && (
                <CardFooter>
                    <div className='text-xs text-muted-foreground'>
                        <strong>{props.data.total} </strong>
                        items
                    </div>
                </CardFooter>
            )}
        </Card>
    )
}
export default ContentTable
