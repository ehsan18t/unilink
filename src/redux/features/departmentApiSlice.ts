import { apiSlice } from '../services/apiSlice';
import { Department } from '@/types';
import { useEffect } from 'react';

const returnObject = (endpoint: string, params: any) => {
	return {
		url: `/department/${endpoint}/`,
		method: 'POST',
		body: params,
	}
}

const departmentApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrievePublicDepartment: builder.query<Department[], void>({
			query: () => '/department/public/',
		}),
		retrieveDepartment: builder.query<Department[], void>({
			query: () => '/department/list/',
		}),
		retrieveDepartmentByUniversity: builder.query<Department[], number>({
			query: (university_id) => `/department/get/?university_id=${university_id}`,
		}),
		registerDepartment: builder.mutation<Department, { name: string; code: string }>({
		  query: ({ name, code }) => returnObject('create', { name, code }),
		  // Explicitly return response in transformResponse
		  transformResponse: (response: any) => response,
		}),
		deleteDepartment: builder.mutation({
			query: ({ department_id }) => (
				returnObject('delete', { department_id })
			)
		}),
	}),
});

export const {
	useRetrievePublicDepartmentQuery,
	useRetrieveDepartmentQuery,
	useRetrieveDepartmentByUniversityQuery,
	useRegisterDepartmentMutation,
	useDeleteDepartmentMutation,
} = departmentApiSlice;


export const useRealTimeDepartmentUpdates = () => {
	const retrieveDepartmentQuery = useRetrieveDepartmentQuery();
	const { data: departments, isLoading, isError } = retrieveDepartmentQuery;

	useEffect(() => {
	  const pollInterval = setInterval(() => {
		retrieveDepartmentQuery.refetch(); // Fetch updated course data
	  }, 5000); // Poll every 5 seconds
  
	  return () => clearInterval(pollInterval); // Clear interval on component unmount
	}, [retrieveDepartmentQuery]);
  
	return { departments, isLoading, isError };
};
