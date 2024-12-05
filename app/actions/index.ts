'use server'

import { APP_SETTINGS } from '@/constants'
import { addDocToCollection, updateDocInCollection } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const normalizeData = (formData: FormData) => {
  return Object.fromEntries(
    Array.from(formData.entries()).filter(([key]) => !key.startsWith('$ACTION_'))
  )
}

export const createCollection = async (formData: FormData) => {
  let collectionId = null
  try {
    const result = await addDocToCollection('collections', normalizeData(formData)) as ApiResponse<CollectionType>
    collectionId = result.data.id
  } catch (e) {
    throw new Error('Error adding a new collection')
  }
  redirect(`${APP_SETTINGS.DASHBOARD_PATH}/collections/${collectionId}`)
}

export const updateCollection = async (formData: FormData) => {
  let collectionId = null
  try {
    const data = normalizeData(formData) as any
    const result = await updateDocInCollection('collections', data.id, data) as ApiResponse<CollectionType>
    collectionId = result.data.id
  } catch (e) {
    throw new Error('Error adding a new collection')
  }
  const path = `${APP_SETTINGS.DASHBOARD_PATH}/collections/${collectionId}`
  revalidatePath(path)
  redirect(path)
}
