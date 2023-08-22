import { apiSlice } from '../services/apiSlice';
import { Department } from '@/types';

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
	useRegisterDepartmentMutation,
	useDeleteDepartmentMutation,
} = departmentApiSlice;
