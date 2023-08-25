import { apiSlice } from '../services/apiSlice';
import { University, User } from '@/types';

const returnObject = (endpoint: string, params: any) => {
	return {
		url: `/university/${endpoint}/`,
		method: 'POST',
		body: params,
	}
}


const universityApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrievePublicUniversity: builder.query<University[], void>({
			query: () => '/university/list/',
		}),
		retrievePendingUniversity: builder.query<University[], void>({
			query: () => '/university/pending/',
		}),
		retrieveApprovedUniversity: builder.query<University[], void>({
			query: () => '/university/approved/',
		}),
        retrieveFacultyList: builder.query<User[], void>({
            query: () => '/university/faculty-list/',
        }),
		registerUniversity: builder.mutation({
			query: ({ name, domain, admin: { first_name, last_name, username, email } }) => (
				returnObject('create', { name, domain, admin: { first_name, last_name, username, email } })
			)
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
	useRetrieveFacultyListQuery,
	useRegisterUniversityMutation,
	useApproveMutation,
	useDisapproveMutation,
	useBanMutation,
	useUnbanMutation,
} = universityApiSlice;
