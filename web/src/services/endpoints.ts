export const endpoints = {
    links: {
        get: '/links',
        post: '/links',
        delete: (id: string) => `/links/${id}`
    }
}