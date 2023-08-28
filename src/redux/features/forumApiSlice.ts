import { apiSlice } from '../services/apiSlice';
import { ForumCategory, Forum, ForumPost, Comment } from '@/types';

const returnObject = (endpoint: string, params: any) => {
	return {
		url: `/forum/${endpoint}/`,
		method: 'POST',
		body: params,
	}
}

const forumApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrieveForumCategory: builder.query<ForumCategory[], void>({
			query: () => '/forum/forum-category-list/',
		}),
		retrieveForumList: builder.query<Forum[], void>({
			query: () => '/forum/forum-list/',
		}),
		retrieveForum: builder.query<Forum, number>({
			query: (forum_id) => `/forum/?forum_id=${forum_id}`,
		}),
		retrieveForumPost: builder.query<ForumPost[], number>({
			query: (forum_id) => `/forum/forum-post-list/?forum_id=${forum_id}`,
		}),
		retrieveAllForumPost: builder.query<ForumPost[], void>({
			query: () => '/forum/forum-posts-for-user/',
		}),
		retrievePostById: builder.query<ForumPost, number>({
			query: (post_id) => `/forum/post-by-id/?post_id=${post_id}`,
		}),
		retrievePostComments: builder.query<Comment[], number>({
			query: (post_id) => `/forum/forum-post-comment-list/?post_id=${post_id}`,
		}),
		registerForum: builder.mutation<Forum, { title: string, description: string, category_id: number}>({
		  query: ({ title, description,category_id }) => returnObject('create', { title, description, category_id }),
		  transformResponse: (response: any) => response,
		}),
		registerCategory: builder.mutation<Forum, { title: string, description: string}>({
		  query: ({ title, description }) => returnObject('create-category', { title, description }),
		  transformResponse: (response: any) => response,
		}),
		registerPost: builder.mutation<Comment, { forum_id: number, title:string, content: string}>({
		  query: ({ forum_id, title, content }) => returnObject('create-post', { forum_id, title, content }),
		  transformResponse: (response: any) => response,
		}),
		registerPostComment: builder.mutation<Comment, { post_id: number, content: string}>({
		  query: ({ post_id, content }) => returnObject('create-post-comment', { post_id, content }),
		  transformResponse: (response: any) => response,
		}),
		registerToggleVote: builder.mutation<Comment, { post_id: number}>({
		  query: ({ post_id }) => returnObject('toggle-post-vote', { post_id }),
		  transformResponse: (response: any) => response,
		}),
		deleteForum: builder.mutation({
			query: ({ forum_id }) => (
				returnObject('delete', { forum_id })
			)
		}),
	}),
});

export const {
	useRetrieveForumCategoryQuery,
	useRetrieveForumListQuery,
	useRetrieveForumQuery,
	useRetrieveForumPostQuery,
	useRetrieveAllForumPostQuery,
	useRetrievePostByIdQuery,
	useRetrievePostCommentsQuery,
	useRegisterForumMutation,
	useRegisterCategoryMutation,
	useRegisterPostMutation,
	useRegisterPostCommentMutation,
	useRegisterToggleVoteMutation,
	useDeleteForumMutation,
} = forumApiSlice;
