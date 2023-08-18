import { apiSlice } from '../services/apiSlice';
import { User, University, PublicUniversity } from '@/types';

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
	}),
});

export const {
	useRetrievePublicUniversityQuery,
	useRetrievePendingUniversityQuery,
	useRetrieveApprovedUniversityQuery,
} = universityApiSlice;
