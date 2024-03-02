import { Blog } from "@/app/blogs/page";
import { endpoints } from "@/core/constants/endpoints";
import { baseQuery } from "@/store/base-query/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
    baseQuery: baseQuery,
    reducerPath: "projectApi",
    tagTypes: ["projects"],
    endpoints: (build) => ({
        getProjects: build.query<Blog, any>({
            transformResponse: (response: any) => response.data,
            transformErrorResponse: (response: any) => response.data,
            keepUnusedDataFor: 0,
            query: () => endpoints.project.getProject,
        }),
    }),
});

export const { useGetProjectsQuery } = projectApi;
