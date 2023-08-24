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
      //  if response not 200, throw error
      if (response.status !== 200 && response.data.status !== 'OK' && response.data.status !== 'success') {
        throw new Error(response.error);
      }

      // show info toast for 2 sec
      toast.info('Processing...', { autoClose: 2000 });

      // delay 2 sec
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Operation Successful!', { autoClose: 2000 });
      return response;
    } catch (error) {
      toast.error('Operation Failed!', { autoClose: 2000 });
      throw error;
    }
  };

  return {
    [`${functionIdentifier}On${functionEndIdentifier}`]: mutationOnClick,
    [`${functionIdentifier}isLoading}`]: isLoading,
  };
}
