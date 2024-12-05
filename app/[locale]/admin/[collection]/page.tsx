import ContentTable from '@/components/content-table'
import { getPageData } from '@/lib'

const Page = async (props: { params: Promise<{ collection: string; locale: string }> }) => {
    const params = await props.params;
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
