import { getDataByType } from '@/lib'
import { TabsContent } from '@radix-ui/react-tabs'
import ContentTable from './content-table'

const DataTabs = async (props: any) => {
    const locales = await getDataByType('locales')
    return (
        <>
            {locales.data.map((tab, index) => {
                return (
                    <TabsContent value={tab.locale} key={index}>
                        <ContentTable title={'Events'} data={props.data} locale={tab.locale} />
                    </TabsContent>
                )
            })}
        </>
    )
}

export default DataTabs
