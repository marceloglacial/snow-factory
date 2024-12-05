'use server'

import { APP_SETTINGS } from '@/constants'
import { addDocToCollection } from '@/lib/db'
import { redirect } from 'next/navigation'

export const createCollection = async (formData: FormData) => {
  let collectionId = null
  try {
    const data = Object.fromEntries(
      Array.from(formData.entries()).filter(([key]) => !key.startsWith('$ACTION_'))
    )
    const result = await addDocToCollection('collections', data) as ApiResponse<CollectionType>
    collectionId = result.data.id
  } catch (e) {
    throw new Error('Error adding a new collection')
  }
  redirect(`${APP_SETTINGS.DASHBOARD_PATH}/collections/${collectionId}`)
}
