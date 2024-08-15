type LocalizationType = {
    [locale: string]: string
}

type ApiResponse = {
    status: 'success' | 'error' | 'loading';
    message: string;
    total: number;
    error: any | null
    data: IDocument[];
};

interface IDocument {
    createdAt: string
    id: string
    modifiedAt: string
    title: LocalizationType
    updatedAt: string
    content: ContentItem[]
    data: IData
}

interface IData {
    type: 'calendar' | 'contentTypes',
    data: DataCalendar | DataContentTypes
}

interface DataCalendar {
    date: string
}

interface DataContentTypes {
    collection: string,
    icon: string
}


interface ContentItem {
    id: string;
    type: 'richText' | 'contentList' | 'form' | 'cloudinaryGallery';
    data: ContentDataRichText | ContentDataContentList | ContentDataForm | ContentDataCloudinary;
}

interface ContentDataRichText {
    content: LocalizationType
}

interface ContentDataContentList {
    type: 'calendar' | 'event';
}

interface ContentDataForm {
    formId: string
}
interface ContentDataCloudinary {
    path: string
}
