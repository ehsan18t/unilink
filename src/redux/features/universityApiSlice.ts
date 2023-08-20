import { apiSlice } from '../services/apiSlice';
import { University, PublicUniversity } from '@/types';

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
			query: ({ university_id }) => ({
				url: '/university/approve/',
				method: 'POST',
				body: { university_id },
			}),
		}),
		disapprove: builder.mutation({
			query: ({ university_id }) => ({
				url: '/university/disapprove/',
				method: 'POST',
				body: { university_id },
			}),
		}),
		ban: builder.mutation({
			query: ({ university_id }) => ({
				url: '/university/ban/',
				method: 'POST',
				body: { university_id },
			}),
		}),
		unban: builder.mutation({
			query: ({ university_id }) => ({
				url: '/university/unban/',
				method: 'POST',
				body: { university_id },
			}),
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
