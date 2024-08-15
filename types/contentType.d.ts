interface IContentType {
    createdAt: string
    updatedAt: string
    modifiedAt: string
    id: string
    name: LocalizationType
    collection: string
    icon: IconTypes
    fields: FieldType[]
}
