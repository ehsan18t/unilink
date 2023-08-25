import { apiSlice } from '../services/apiSlice';
import { ForumCategory, Forum, ForumPost } from '@/types';

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
		retrieveForumPost: builder.query<ForumPost[], number>({
			query: (forum_id) => `/forum/forum-post-list/?forum_id=${forum_id}`,
		}),
		registerForum: builder.mutation<Forum, { name: string; code: string }>({
		  query: ({ name, code }) => returnObject('create', { name, code }),
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
	useRetrieveForumListQuery,
	useRegisterForumMutation,
	useDeleteForumMutation,
} = forumApiSlice;
