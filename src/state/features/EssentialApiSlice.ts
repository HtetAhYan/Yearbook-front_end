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
                    url:`/yearbooks/liked/${card_id}/${user_id}`,
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
        deleteComment: builder.mutation({
            query: ({ comment_id,user_id }) => {
            
                return{
                    url:`/yearbooks/comments/${comment_id}/${user_id}`,
                        method: 'DELETE',
                  
                  
                    
                }
            },invalidatesTags: (result, error, arg) => [ { type: 'COMMENT', id: arg.comment_id} ],
        }),
        saveSettings: builder.mutation({
            query: ({ file,fullName,password }) => {
                const form = new FormData();
            form.append('Image', file);
                        const array = {
                            fullName: fullName,
                            password: password
                }

                const jsonData = JSON.stringify(array);
                 const jsonBlob = new Blob([jsonData], { type: "application/json" });
            
                form.append('requests', jsonBlob)
                return{
                    url:`/user/settings`,
                    method: 'PATCH',
                    body: form,                    
                }
            },
        }),
        refreshUserInfo: builder.mutation({
            query: () => {
            
                return{
                    url:`user/refreshInfo`,
                        method: 'GET',
                  
                    
                }
            },
        }), deleteCardById: builder.mutation({
            query: ({ card_id, user_id }) => {
                
                return {
                    url: `/yearbooks/delete/${card_id}/${user_id}`,
                    method: 'DELETE',
                  
                }
            }
            , invalidatesTags: ['CARDS']
            
              
            

            })
    }),
})
export const {usePostCommentMutation,useToggleLikeMutation,useGetIsLikedQuery,useDeleteCommentMutation,useSaveSettingsMutation,useRefreshUserInfoMutation,useDeleteCardByIdMutation} = essentialApiSlice