import { DiscardButton, FormField, FormLayout, SaveButton } from '@/components/form'
import { getContentDataById } from '@/lib/contentType'

const AddPage = async ({ params }: { params: { slug: string } }) => {
    const result = await getContentDataById('contentTypes', 'pDdF9JN5kK99eMzO6QY6')
    const data = result.data

    return (
        <form className='grid flex-1 items-start gap-4'>
            <FormLayout
                title={`Add ${data.name.en}`}
                actions={
                    <>
                        <DiscardButton slug={params.slug} />
                        <SaveButton id={'pDdF9JN5kK99eMzO6QY6'} />
                    </>
                }
                content={
                    <>
                        {data.fields.map((field: any, index: number) => (
                            <FormField key={index} {...field} />
                        ))}
                    </>
                }
                aside={undefined}
            />
        </form>
    )
}
export default AddPage
