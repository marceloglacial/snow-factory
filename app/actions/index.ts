'use server'
import { addDocToCollection, updateDocInCollection } from '@/lib/db'
import { normalizeData } from '@/lib/utils'


export const createCollection = async (prevState: any, formData: FormData) => {
  try {
    await addDocToCollection('collections', normalizeData(formData)) as ApiResponse<CollectionType>
    return 'Collection Added!'
  } catch (e) {
    throw new Error('Error adding a new collection')
  }
}

export const updateCollection = async (prevState: any, formData: FormData) => {
  let collectionId = null
  try {
    const data = normalizeData(formData) as any
    const result = await updateDocInCollection('collections', data.id, data) as ApiResponse<CollectionType>
    collectionId = result.data.id
    return 'Collection updated!'
  } catch (e) {
    throw new Error('Error updating the collection')
  }
}
