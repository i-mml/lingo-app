import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { baseUrl } from "../../constants/config";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const axiosBaseQuery: BaseQueryFn<string> = async ({
  url,
  method,
  body,
}: any) => {
  try {
    const result = await axiosInstance({
      url,
      method,
      data: body,
    });
    return { data: result.data };
  } catch (err: any) {
    return {
      error: { status: err.response?.status, data: err.response?.data },
    };
  }
};

export const companiesApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getCompanyApiById: builder.query<any, string>({
      query: (id) => `/companies/${id}`,
    }),
    getCompaniesList: builder.query<any[], string>({
      query: () => `/companies`,
    }),
  }),
});

export const { useGetCompanyApiByIdQuery, useGetCompaniesListQuery } =
  companiesApi;
