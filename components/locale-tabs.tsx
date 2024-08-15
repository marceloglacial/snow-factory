import { FC } from 'react'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getDataByType } from '@/lib'
import { Alert } from './ui/alert'

export const LocaleTabs: FC = async (): Promise<JSX.Element> => {
    const response = await getDataByType('locales')
    const data = response.data

    if (response.error) return <Alert variant='destructive'>Error Loading Page Data.</Alert>

    return (
        <TabsList>
            {data.map((locale, index) => (
                <TabsTrigger key={index} value={locale.locale}>
                    {locale.icon} {locale.title}
                </TabsTrigger>
            ))}
        </TabsList>
    )
}
