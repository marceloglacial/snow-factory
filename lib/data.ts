export const getDataByType = async (type: string): Promise<ApiResponse> => {
    const res = await fetch(`${process.env.API_URL}/${type}`, { next: { revalidate: 30000 } });
    return res.json();
}

export const getDataById = async (type: string, id: string): Promise<ApiResponse> => {
    const res = await fetch(`${process.env.API_URL}/${type}/${id}`, { next: { revalidate: 30000 } });
    return res.json();
}

export const getDataBySlug = async (type: string, locale: string, slug: string): Promise<ApiResponse> => {
    const res = await fetch(`${process.env.API_URL}/${type}/${locale}/${slug}`, { next: { revalidate: 30000 } });
    return res.json();
}
