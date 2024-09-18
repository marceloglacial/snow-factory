type CollectionsType = {
    title: LocalizationType,
    icon?: string,
    id: string
    fields: FieldType[]
}

type CollectionsApiResponse = ApiResponse & {
    data: CollectionsType[]
}

type CollectionApiResponse = ApiResponse & {
    data: CollectionsType
}
