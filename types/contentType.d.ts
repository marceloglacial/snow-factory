type ContentTypeType = {
    icon: string,
    title: LocalizationType,
    slug: LocalizationType,
    collection: string
    fields: FieldsType[]
}

type FieldsType = {
    id: string,
    name: string,
    label: LocalizationType,
    type: 'input' | 'select' | 'textarea' | 'radio' | 'checkbox' | 'submit',
    variant?: 'text' | 'email' | 'url',
    required: boolean
}
