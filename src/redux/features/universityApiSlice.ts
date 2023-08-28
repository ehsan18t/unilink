import { apiSlice } from '../services/apiSlice';
import { University, User } from '@/types';
import { useEffect } from 'react';

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
			query: ({ name, domain, doc_url, admin: { first_name, last_name, username, email } }) => (
				returnObject('create', { name, domain, doc_url, admin: { first_name, last_name, username, email } })
			)
		}),
		registerFaculty: builder.mutation({
			query: ({ first_name, last_name, username, email }) => (
				returnObject('add-faculty', { first_name, last_name, username, email })
			)
		}),
		deleteFaculty: builder.mutation({
			query: ({ faculty_id }) => (
				returnObject('remove-faculty', { faculty_id })
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
	useRegisterFacultyMutation,
	useDeleteFacultyMutation,
	useApproveMutation,
	useDisapproveMutation,
	useBanMutation,
	useUnbanMutation,
} = universityApiSlice;

// realtime faculty list
export const useRealTimeFacultyListUpdates = () => {
	const retrieveFacultyListQuery = useRetrieveFacultyListQuery();
	const { data: departments, isLoading, isError } = retrieveFacultyListQuery;

	useEffect(() => {
	  const pollInterval = setInterval(() => {
		retrieveFacultyListQuery.refetch(); // Fetch updated course data
	  }, 5000); // Poll every 5 seconds
  
	  return () => clearInterval(pollInterval); // Clear interval on component unmount
	}, [retrieveFacultyListQuery]);
  
	return { facultyList: departments, isLoading, isError };
};

