interface IContentTable {
    title: string
    description?: string
    locale: string
    data: any[]
}

type ContentTableData = {
    total: number,
    items: ContentTableItem[]
}

type ContentTableItem = {
    id: string,
    title: string,
    status: string,
    updatedAt: string
}
