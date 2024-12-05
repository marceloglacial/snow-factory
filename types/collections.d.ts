
type CollectionType = {
  id: string
  title: string
}

interface CollectionPageProps {
  params: {
    id: string
  }
}

interface FormCollectionProps {
  data?: CollectionType
}
