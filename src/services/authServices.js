import http from './httpServices';

export const AuthService = {
  login: (payload) =>
    http.post('https://erp.ibos.io/identity/TokenGenerate/IbosLogin', {
      userName: payload.email,
      password: payload.password,
    }),
  getuser: (payload) =>
    http.get(
      `https://erp.ibos.io/domain/CreateUser/GetUserInformationByUserEmail?Email=${payload.emailaddress}`,

      {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      },
    ),
};
