import ContentTable from '@/components/content-table'
import { getPageData } from '@/lib'

const Page = async ({ params }: { params: { collection: string; locale: string } }) => {
    const data = await getPageData(params.collection, params.locale)

    if ('error' in data.status) throw Error

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
