import { Blog } from "@/app/blogs/page";
import { endpoints } from "@/core/constants/endpoints";
import { baseQuery } from "@/store/base-query/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
    baseQuery: baseQuery,
    reducerPath: "blogsApi",
    tagTypes: ["blogs"],
    endpoints: (build) => ({
        getBlogs: build.query<Blog, any>({
            transformResponse: (response: any) => response.data,
            transformErrorResponse: (response: any) => response.data,
            keepUnusedDataFor: 0,
            query: () => endpoints.blogs.getBlogs,
        }),
    }),
});

export const { useGetBlogsQuery } = blogsApi;
