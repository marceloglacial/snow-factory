import ContentTable from '@/components/content-table'
import { getPageData } from '@/lib'

const Page = async ({ params }: { params: { slug: string } }) => {
    const data = await getPageData(params.slug)

    if ('error' in data.status) return <>Error: {data.status.message}</>

    const tableData = data.data

    return (
        <ContentTable
            title={tableData.title}
            data={{
                items: tableData.items,
                total: tableData.total,
            }}
        />
    )
}
export default Page
