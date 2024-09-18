type ApiResponse = {
    meta: MetaType,
    status: StatusType,
    data: any[]
}

type StatusType = {
    code: number,
    message: string
}

type MetaType = {
    total: number,
    page: number,
    pages: number
}
