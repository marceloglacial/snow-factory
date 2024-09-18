import { APP_SETTINGS } from '@/constants'
import { getCollectionById, getContentById } from '@/lib'

const EditPage = async ({ params }: { params: { slug: string[] } }) => {
    const [collectionId, contentId] = params.slug
    const collection = await getCollectionById(collectionId)
    const content = await getContentById(collectionId, contentId)

    if ('error' in collection.status) return <>Error: {collection.status.message}</>

    return (
        <>
            <h1>{collection.data.title[APP_SETTINGS.DEFAULT_LOCALE]}</h1>
            {collection.data.fields.map((field, index) => {
                return (
                    <div key={index}>
                        <label>{field.label}</label>
                        <input
                            type={field.inputType}
                            className='border'
                            defaultValue={content.data.title.en}
                        />
                    </div>
                )
            })}
        </>
    )
}
export default EditPage
