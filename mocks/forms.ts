type FormsType = {
    id: string,
    title: LocalizationType,
    slug: LocalizationType
}

export const forms: FormsType[] = [
    {
        id: '1',
        title: {
            en: 'Contact Us Form',
            'pt-BR': 'Formulário de Contato'
        },
        slug: {
            en: 'contact-us-form',
            'pt-BR': 'formulario-de-contato'
        }
    },
    {
        id: '2',
        title: {
            en: 'Job Application Form',
            'pt-BR': 'Formulário de Candidatura'
        },
        slug: {
            en: 'job-application-form',
            'pt-BR': 'formulario-de-candidatura'
        }
    },
    {
        id: '3',
        title: {
            en: 'Newsletter Subscription Form',
            'pt-BR': 'Formulário de Inscrição na Newsletter'
        },
        slug: {
            en: 'newsletter-subscription-form',
            'pt-BR': 'formulario-de-inscricao-newsletter'
        }
    },
    {
        id: '4',
        title: {
            en: 'Event Registration Form',
            'pt-BR': 'Formulário de Inscrição em Eventos'
        },
        slug: {
            en: 'event-registration-form',
            'pt-BR': 'formulario-de-inscricao-eventos'
        }
    },
]
