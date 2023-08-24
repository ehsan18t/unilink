import { apiSlice } from '../services/apiSlice';
import { Course } from '@/types';
import { useEffect } from 'react';

const returnObject = (endpoint: string, params: any) => {
	return {
		url: `/course/${endpoint}/`,
		method: 'POST',
		body: params,
	}
}

const courseApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrieveCourse: builder.query<Course[], void>({
			query: () => '/course/',
		}),
		registerCourse: builder.mutation<Course, { name: string; code: string, credit: number, type: number, department_id: number }>({
		  query: ({ name, code, credit, type, department_id }) => returnObject('create', { name, code, credit, type, department_id }),
		  transformResponse: (response: any) => response,
		}),
		deleteCourse: builder.mutation({
			query: ({ course_id }) => (
				returnObject('delete', { course_id })
			)
		}),
	}),
});

export const {
	useRetrieveCourseQuery,
	useRegisterCourseMutation,
	useDeleteCourseMutation,
} = courseApiSlice;


export const useRealTimeCourseUpdates = () => {
	const retrieveCourseQuery = useRetrieveCourseQuery();
	const { data: courses, isLoading, isError } = retrieveCourseQuery;

	useEffect(() => {
	  const pollInterval = setInterval(() => {
		retrieveCourseQuery.refetch(); // Fetch updated course data
	  }, 5000); // Poll every 5 seconds
  
	  return () => clearInterval(pollInterval); // Clear interval on component unmount
	}, [retrieveCourseQuery]);
  
	return { courses, isLoading, isError };
  };