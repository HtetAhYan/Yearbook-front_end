import {
    createApi,
    fetchBaseQuery,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { baseQueryWithReauth } from './CustomBaseQuery';
import { profile } from 'console';



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithReauth,
    
    
    tagTypes: [],
    endpoints: (builder) => ({
        getTest: builder.mutation({
            query: (url) => {
                return {
                    url: `/test/${url}`,
                    method: 'POST',
                    
                }
            }
        }),
        postProfile: builder.mutation({
            query: (data) => {
                const { id, file } = data
                console.log('data', file);

                const form = new FormData()
                form.append('profile', file)
                return {
                    url: `/user/${id}/profile`,
              /*    headers: {
                    'Content-Type': 'multipart/form-data',
                 }, */
                    method: 'POST',
                    body: form,
                }
            }
        })
      }),
    
    // eslint-disable-next-line consistent-return
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
});

export default baseApi;
export const {useGetTestMutation ,usePostProfileMutation } = baseApi