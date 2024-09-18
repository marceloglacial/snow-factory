type PagesType = {
    id: string,
    title: LocalizationType,
    slug: LocalizationType
}

type ContentApiResponse = ApiResponse & {
    data: PagesType[]
}

type SingleContentApiResponse = ApiResponse & {
    data: PagesType | undefined
}
