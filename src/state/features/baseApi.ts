import {
    createApi,

} from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { baseQueryWithReauth } from './CustomBaseQuery';
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithReauth,
    
    
    tagTypes: ['COMMENT','LIKE','CARDS'],
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
        }),
        postYearBookCard: builder.mutation({
            query: (data) => {
                const { user, file,cardDatas } = data
        
                const array = {
                    status: cardDatas.status,
                    year: cardDatas.Year,
                    grade: cardDatas.grade,
                    campus: cardDatas.campus,
                    borderType: cardDatas.border,
                    userProfile:user.profileURL
                }
                console.log('array', array);
                const jsonData = JSON.stringify(array);
                 const jsonBlob = new Blob([jsonData], { type: "application/json" });
                const form = new FormData()
                form.append('yearbook_card', jsonBlob)
          
                  form.append('cardImage',file)
          
                return {
                    url: `/user/${user.id}/yearbook/upload`,
                
                    method: 'POST',
                    body: form,
                }
            }
        }),
        getYearbooks: builder.query({
            query: ({page,year,limit,user_id}) => {
                return {
                    url: `/yearbooks/basic?page=0&year=2022&limit=10&user_id=${user_id}`,
                    method: 'GET',
                }
            }, providesTags: (result, error, arg) =>  result
                ? [result.map(({
                    
                    res }: any) => ({ type: 'CARDS' , id: res?.id })),    { type: 'CARDS', id: 'LIST' },
                          { type: 'CARDS', id: 'content' },]
          : ['CARDS'],
        })
        ,
        getComments: builder.query({
            query: ({ id, page, limit }) => {
        
                return{
                    url: `yearbooks/comments/${id}?limit=${page}&offset=${limit}`,
                    method: 'GET',
                        
            }
            },  providesTags: result =>
                result
                    ? [
                          ...result?.comments.map((comment: { id: any; }) => ({ type: 'COMMENT', id: comment.id })),
                          { type: 'COMMENT', id: 'LIST' },
                          { type: 'COMMENT', id: 'content' },
                      ]
                    : [
                          { type: 'COMMENT', id: 'LIST' },
                          { type: 'COMMENT', id: 'content' },
                      ],
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
export const {useGetTestMutation ,usePostProfileMutation,usePostYearBookCardMutation,useGetCommentsQuery,useGetYearbooksQuery } = baseApi