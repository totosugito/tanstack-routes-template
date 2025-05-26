import {fetchApi} from "@/lib/fetch-api";
import {AppApi} from "@/service/api";
import {useMutation} from "@tanstack/react-query";
import {useAuth} from "@/lib/use-auth";

export const useLoginMutation = () => {
  const auth = useAuth();

  return(
    useMutation({
      mutationKey: ['login'],
      mutationFn: async ({email, password}: { email: string; password: string }) => {
        const response = await fetchApi({
          method: 'POST',
          url: AppApi.auth.login,
          body: {
            email,
            password,
          },
        });

        if(response?.status === 0) {
          throw new Error(response?.message);
        }

        let user = {...response?.data?.user, token: response?.data?.access_token};
        return await(auth.login(user));
      },
    })
  )
}

export const useLogoutMutation = async (email: string, password: string) => {
  const auth = useAuth();
  await auth.logout();

  return(
    useMutation({
      mutationKey: ['logout'],
      mutationFn: async () => {
        await fetchApi({
          method: 'POST',
          url: AppApi.auth.logout,
          body: {},
        });

        return null
      },
    })
  )
}