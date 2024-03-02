export const routes = {
    home: "/",
    blogs: "/blogs",
    projects: "/projects",
    blogDetail: (id: string) => `/blogs/${id}`,
    projectDetail: (id: string) => `/projects/${id}`,
}