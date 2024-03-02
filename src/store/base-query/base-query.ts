import { baseURL } from "@/core/constants/endpoints";
import { prepareProtectedHeader } from "@/core/lib/prepare.header";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: prepareProtectedHeader,
});
