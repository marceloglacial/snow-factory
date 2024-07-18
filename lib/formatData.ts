export const formataData = (data: any, locale: string): ContentTableData => {
    const result: ContentTableItem[] = data.data.map((item: any) => {
        return {
            id: item.id,
            title: item.title[`${locale}`],
            status: 'published',
            updatedAt: item.updatedAt
        }
    })

    return {
        total: data.total,
        items: result
    }
}
