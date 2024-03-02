export const baseURL: string =
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://192.168.1.75:8080/api";
export const imageBaseUrl: string = process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? "http://192.168.1.75:8080";

export const endpoints = {
    blogs:{
        getBlogs:"/blogs"
    },
    project:{
        getProject:"/projects"
    }
}