import {fetchApi} from "@/lib/fetch-api";
import {AppApi} from "@/service/api";
import {useMutation} from "@tanstack/react-query";
import {useAuth} from "@/lib/use-auth";
import {APP_CONFIG} from "@/constant/config";
import {useNavigate, useRouter} from "@tanstack/react-router";

export const useLoginMutation = () => {
  const auth = useAuth();

  return (
    useMutation({
      mutationKey: ['login'],
      mutationFn: async ({email, password}: { email: string; password: string }) => {
        let response;
        if (APP_CONFIG?.isDev) {
          if ((email !== APP_CONFIG?.demoUser?.email) || (password !== APP_CONFIG?.demoUser?.password)) {
            throw new Error("Invalid email or password");
          }
          response = {
            status: 1,
            message: "Successfully login",
            data: {
              access_token: "demo-token",
              user: {
                id: 1,
                email: "phe@mail.com",
                role_id: 1,
                fullname: "PHE",
              }
            }
          }
        } else {
          response = await fetchApi({
            method: 'POST',
            url: AppApi.auth.login,
            body: {
              email,
              password,
            },
          });
        }

        if (response?.status === 0) {
          throw new Error(response?.message);
        }

        let user = {...response?.data?.user, token: response?.data?.access_token};
        return await (auth.login(user));
      },
    })
  )
}

export const useLogoutMutation = () => {
  const auth = useAuth();
  const router = useRouter()
  const navigate = useNavigate()
  return (
    useMutation({
      mutationKey: ['logout'],
      mutationFn: async () => {
        if (APP_CONFIG?.isDev) {

        }
        else {
          await fetchApi({
            method: 'POST',
            url: AppApi.auth.logout,
            body: {},
          });
        }

        auth.logout().then(() => {
          router.invalidate().finally(() => {
            navigate({ to: '/' }).then(()=>{})
          })
        })
        return {status: 1, message: "Successfully logged out"}
      },
    })
  )
}