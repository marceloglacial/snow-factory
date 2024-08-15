import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { FC } from 'react'

interface FormFieldProps {
    type: string
    name: string
    label: string
}

export const FormField: FC<FormFieldProps> = (props): JSX.Element => {
    switch (props.type) {
        case 'text':
            return (
                <div className='grid gap-3'>
                    <Label htmlFor={props.name} className=' text-xl'>
                        {props.label}
                    </Label>
                    <Input id={props.name} type='text' />
                </div>
            )
        case 'textarea':
            return (
                <div className='grid gap-3'>
                    <Label htmlFor={props.name} className=' text-xl'>
                        {props.label}
                    </Label>
                    <Textarea id={props.name} rows={10} />
                </div>
            )
        default:
            return <></>
    }
}
