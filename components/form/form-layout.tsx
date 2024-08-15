import { FC, ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface FormLayoutProps {
    title: string
    description?: string
    actions: ReactNode
    content: ReactNode
    aside: ReactNode
}

export const FormLayout: FC<FormLayoutProps> = (props): JSX.Element => {
    return (
        <div className='form-layout grid flex-1 auto-rows-max gap-4'>
            <div className='form-layout-header flex items-center gap-4'>
                <h1 className='form-layout-title flex-1 shrink-0 whitespace-nowrap text-4xl font-semibold tracking-tight sm:grow-0'>
                    {props.title}
                </h1>
                <div className='form-layout-actions hidden items-center gap-2 md:ml-auto md:flex'>
                    {props.actions}
                </div>
            </div>
            <div className='form-layout-grid grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
                <div className='form-layout-content grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Details</CardTitle>
                            {props.description && (
                                <CardDescription>{props.description}</CardDescription>
                            )}
                        </CardHeader>
                        <CardContent>
                            <div className='grid gap-6'>{props.content}</div>
                        </CardContent>
                    </Card>
                </div>
                <div className='form-layout-aside grid auto-rows-max items-start gap-4 lg:gap-8'>
                    {props.aside}
                </div>
            </div>
            <div className='form-layout-footer flex items-center justify-center gap-2 md:hidden'>
                {props.actions}
            </div>
        </div>
    )
}
export default FormLayout
