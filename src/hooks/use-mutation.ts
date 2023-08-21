import { toast } from 'react-toastify';

export default function useMutation(
  mutationFunction: () => any,
  params: any,
  functionIdentifier: string,
    functionEndIdentifier: string = 'Action',
) {
	const [action, { isLoading }] = mutationFunction();
  const mutationOnClick = async (): Promise<any> => {
    try {
      const response = await action(params); // Use mutationFunction and params here
      toast.success('Operation Successful!');
      return response;
    } catch (error) {
      toast.error('Operation Failed!');
      throw error;
    }
  };

  return {
    [`${functionIdentifier}On${functionEndIdentifier}`]: mutationOnClick,
    [`${functionIdentifier}isLoading}`]: isLoading,
  };
}
