import { apiSlice } from '../services/apiSlice';
import { User, University, PublicUniversity } from '@/types';

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrievePublicUniversity: builder.query<PublicUniversity[], void>({
			query: () => '/university/list/',
		})
	}),
});

export const {
	useRetrievePublicUniversityQuery,
} = authApiSlice;
