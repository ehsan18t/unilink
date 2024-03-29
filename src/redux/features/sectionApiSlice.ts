import { apiSlice } from '../services/apiSlice';
import { Section } from '@/types';
import { useEffect } from 'react';

const returnObject = (endpoint: string, params: any) => {
	return {
		url: `/course/section/${endpoint}/`,
		method: 'POST',
		body: params,
	}
}

const sectionApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrieveSections: builder.query<Section[], number>({
            query: (course_id) => `/course/sections/?course_id=${course_id}`,
        }),
        retrieveSection: builder.query<Section, number>({
            query: section_id => `/course/section/?section_id=${section_id}`,
        }),
		registerSection: builder.mutation<Section, { name: string; trimester: string, course_id: number }>({
        query: ({ name, trimester, course_id }) => returnObject('create', { name, trimester, course_id }),
            transformResponse: (response: any) => response,
		}),
		updateSection: builder.mutation<Section, { name: string; trimester: string, course_id: number }>({
        query: ({ name, trimester, course_id }) => returnObject('update', { name, trimester, course_id }),
            transformResponse: (response: any) => response,
		}),
		addFacultyToSection: builder.mutation<Section, { section_id: number, faculty_id: number }>({
        query: ({ section_id, faculty_id }) => returnObject('add-faculty', { section_id, faculty_id }),
            transformResponse: (response: any) => response,
		}),
		deleteSection: builder.mutation({
			query: ({ section_id }) => (
				returnObject('delete', { section_id })
			)
		}),
		removeUser: builder.mutation({
			query: ({ section_id, user_id }) => (
				returnObject('remove-user', { section_id, user_id })
			)
		}),
	}),
});

export const {
	useRetrieveSectionsQuery,
	useRetrieveSectionQuery,
	useRegisterSectionMutation,
	useUpdateSectionMutation,
	useAddFacultyToSectionMutation,
	useDeleteSectionMutation,
	useRemoveUserMutation,
} = sectionApiSlice;


export const useRealTimeSectionUpdates = (course_id: any) => {
	const retrieveSectionsQuery = useRetrieveSectionsQuery(course_id);
	const { data: sections, isLoading, isError } = retrieveSectionsQuery;

	useEffect(() => {
	  const pollInterval = setInterval(() => {
		retrieveSectionsQuery.refetch(); // Fetch updated section data
	  }, 5000); // Poll every 5 seconds
  
	  return () => clearInterval(pollInterval); // Clear interval on component unmount
	}, [retrieveSectionsQuery]);
  
	return { sections, isLoading, isError };
  };