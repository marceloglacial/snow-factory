interface IContentTable {
    title: string
    description?: string
    contentType: string
    data: ContentTableData
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
