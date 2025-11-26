export const endpoints = {
    links: {
        get: '/links',
        post: '/links',
        export: '/links/export',
        getBySlug: (slug: string) => `/links/${slug}`,
        delete: (id: string) => `/links/${id}`
    }
}