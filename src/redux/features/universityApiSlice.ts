import { apiSlice } from '../services/apiSlice';
import { University, PublicUniversity } from '@/types';

const returnObject = (endpoint: string, params: any) => {
	return {
		url: `/university/${endpoint}/`,
		method: 'POST',
		body: params,
	}
}


const universityApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrievePublicUniversity: builder.query<PublicUniversity[], void>({
			query: () => '/university/list/',
		}),
		retrievePendingUniversity: builder.query<University[], void>({
			query: () => '/university/pending/',
		}),
		retrieveApprovedUniversity: builder.query<University[], void>({
			query: () => '/university/approved/',
		}),
		approve: builder.mutation({
			query: ({ university_id }) => (returnObject('approve', { university_id }))
		}),
		disapprove: builder.mutation({
			query: ({ university_id }) => (returnObject('disapprove', { university_id }))
		}),
		ban: builder.mutation({
			query: ({ university_id }) => (returnObject('ban', { university_id }))
		}),
		unban: builder.mutation({
			query: ({ university_id }) => (returnObject('unban', { university_id }))
		}),
	}),
});

export const {
	useRetrievePublicUniversityQuery,
	useRetrievePendingUniversityQuery,
	useRetrieveApprovedUniversityQuery,
	useApproveMutation,
	useDisapproveMutation,
	useBanMutation,
	useUnbanMutation,
} = universityApiSlice;
