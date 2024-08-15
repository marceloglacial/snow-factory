import { Tabs } from '@/components/ui/tabs'
import { AddButton } from '@/components/form'
import { getDataByType } from '@/lib'
import { Alert } from '@/components/ui/alert'
import { LocaleTabs } from '@/components/locale-tabs'
import DataTabs from '@/components/data-tabs'

const ContentTypePage = async ({ params }: { params: { slug: string } }) => {
    const response = await getDataByType(params.slug)

    if (response.error) return <Alert variant='destructive'>Error Loading Page Data.</Alert>

    return (
        <Tabs defaultValue='en' className='max-w-screen-2xl'>
            <div className='flex items-center'>
                <LocaleTabs />
                <div className='ml-auto flex items-center gap-2'>
                    <AddButton path={params.slug} />
                </div>
            </div>
            <DataTabs {...response} />
        </Tabs>
    )
}
export default ContentTypePage
