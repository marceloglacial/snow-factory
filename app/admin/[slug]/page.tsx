import ContentTable from '@/components/content-table'
import { Button } from '@/components/ui/button'
import { getContentData, getContenTypeBySlug, getLocales } from '@/lib/contentType'
import { formataData } from '@/lib/formatData'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { CirclePlusIcon } from 'lucide-react'

const ContentListPage = async ({ params }: { params: { slug: string } }) => {
    const data = await getContentData(params.slug)
    const locales = await getLocales()
    const pageInfo = await getContenTypeBySlug(params.slug, 'en')
    const tabContent = locales.map((locale) => {
        return {
            locale: locale.locale,
            data: formataData(data, locale.locale),
        }
    })

    return (
        <Tabs defaultValue='en' className='max-w-screen-2xl'>
            <div className='flex items-center'>
                <TabsList>
                    {locales.map((locale, index) => (
                        <TabsTrigger key={index} value={locale.locale}>
                            {locale.icon} {locale.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <div className='ml-auto flex items-center gap-2'>
                    <Button size='sm' className='h-8 gap-1'>
                        <CirclePlusIcon className='h-3.5 w-3.5' />
                        <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                            Add item
                        </span>
                    </Button>
                </div>
            </div>
            {tabContent.map((tab, index) => (
                <TabsContent value={tab.locale} key={index}>
                    <ContentTable title={pageInfo?.name.en || 'Loaading'} data={tab.data} />
                </TabsContent>
            ))}
        </Tabs>
    )
}
export default ContentListPage
