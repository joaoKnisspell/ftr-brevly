export const endpoints = {
    links: {
        get: '/links',
        post: '/links',
        getBySlug: (slug: string) => `/links/${slug}`,
        delete: (id: string) => `/links/${id}`
    }
}