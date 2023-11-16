import baseApi from "./baseApi";

export const essentialApiSlice = baseApi.injectEndpoints({

  
    endpoints: (builder) => ({
        postComment: builder.mutation({
            query: ({ user_id, card_id, text }) => {
            
                return{
                    url:`/yearbooks/comment/${card_id}/${user_id}`,
                        method: 'POST',
                    body: JSON.stringify({ text: text }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    
                }
            },invalidatesTags: ['COMMENT']
        }),
        getIsLiked: builder.query({
            query: ({ user_id, card_id }) => {
            
                return{
                    url:`/yearbooks/like/${card_id}/${user_id}`,
                        method: 'GET',
                  
                  
                    
                }
            },providesTags: (result, error, arg) => [ { type: 'LIKE', id: arg.card_id} ],
        })
        ,
        toggleLike: builder.mutation({
            query: ({ user_id, card_id }) => {
            
                return{
                    url:`/yearbooks/like/${card_id}/${user_id}`,
                        method: 'POST',
                  
                  
                    
                }
            }, invalidatesTags: (result, error, arg) => [ { type: 'LIKE', id: arg.card_id} ],
        }),
    }),
})
export const {usePostCommentMutation,useToggleLikeMutation,useGetIsLikedQuery} = essentialApiSlice