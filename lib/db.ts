import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore, collection, getDocs, limit, orderBy, query, startAfter, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export const storage = getStorage(app)
export const db = getFirestore(app)

export const getCollectionById = async (
  collectionId: string,
  order?: string,
  page: number = 1,
  pageSize: number = 100
): Promise<ApiResponse<any[]>> => {
  try {
    const collectionRef = collection(db, collectionId);
    const orderedQuery = order ? query(collectionRef, orderBy(order)) : collectionRef;

    let paginatedQuery = query(orderedQuery, limit(pageSize));

    if (page > 1) {
      // Retrieve the last document of the previous page
      const previousPageQuery = query(orderedQuery, limit((page - 1) * pageSize));
      const previousPageSnapshot = await getDocs(previousPageQuery);

      if (!previousPageSnapshot.empty) {
        const lastVisible = previousPageSnapshot.docs[previousPageSnapshot.docs.length - 1];
        paginatedQuery = query(orderedQuery, startAfter(lastVisible), limit(pageSize));
      }
    }

    const querySnapshot = await getDocs(paginatedQuery);

    const allDocs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const totalCount = (await getDocs(orderedQuery)).size;
    const hasNextPage = totalCount > page * pageSize;

    return {
      status: 'success',
      message: 'Success',
      meta: {
        totalCount,
        page,
        pageSize,
        hasNextPage
      },
      data: allDocs
    };
  } catch (e: any) {
    throw new Error(`Failed to fetch collection ${collectionId}: ${e.message}`);
  }
};

export const addDocToCollection = async (
  collectionId: string,
  data: any
): Promise<ApiResponse<any>> => {
  try {
    const collectionRef = collection(db, collectionId);
    const docRef = await addDoc(collectionRef, data);

    return {
      status: 'success',
      message: 'Document added successfully',
      meta: {
        totalCount: 1,
        page: 1,
        pageSize: 1,
        hasNextPage: false
      },
      data: {
        id: docRef.id,
        ...data
      }
    };
  } catch (e: any) {
    throw new Error(`Failed to add document to ${collectionId}: ${e.message}`);
  }
};

export const getDocumentById = async (
  collectionId: string,
  docId: string
): Promise<ApiResponse<any>> => {
  try {
    const docRef = doc(db, collectionId, docId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return {
        status: 'success',
        message: 'Success',
        data: { id: docSnapshot.id, ...docSnapshot.data() },
        meta: {
          totalCount: 0,
          page: 0,
          pageSize: 0,
          hasNextPage: false
        }
      };
    } else {
      return {
        status: 'error',
        message: 'Document not found',
        data: null,
        meta: {
          totalCount: 0,
          page: 0,
          pageSize: 0,
          hasNextPage: false
        }
      };
    }
  } catch (e) {
    console.error(e);
    return {
      status: 'error',
      message: 'Error retrieving document',
      data: null,
      meta: {
        totalCount: 0,
        page: 0,
        pageSize: 0,
        hasNextPage: false
      }
    };
  }
};

export const updateDocInCollection = async (
  collectionId: string,
  docId: string,
  data: any
): Promise<ApiResponse<any>> => {
  try {
    const docRef = doc(db, collectionId, docId);
    await updateDoc(docRef, data);

    const updatedDoc = await getDoc(docRef);

    return {
      status: 'success',
      message: 'Document updated successfully',
      meta: {
        totalCount: 1,
        page: 1,
        pageSize: 1,
        hasNextPage: false
      },
      data: {
        id: updatedDoc.id,
        ...updatedDoc.data()
      }
    };
  } catch (e: any) {
    throw new Error(`Failed to update document ${docId} in ${collectionId}: ${e.message}`);
  }
};

export const deleteDocFromCollection = async (
  collectionId: string,
  docId: string
): Promise<ApiResponse<null>> => {
  try {
    const docRef = doc(db, collectionId, docId);
    await deleteDoc(docRef);

    return {
      status: 'success',
      message: 'Document deleted successfully',
      meta: {
        totalCount: 0,
        page: 0,
        pageSize: 0,
        hasNextPage: false
      },
      data: null
    };
  } catch (e: any) {
    throw new Error(`Failed to delete document ${docId} from ${collectionId}: ${e.message}`);
  }
};
