type PagesType = {
    id: string,
    title: sring,
    slug: string
}

type ContentApiResponse = ApiResponse & {
    data: PagesType[]
}

type SingleContentApiResponse = ApiResponse & {
    data: PagesType | undefined
}
