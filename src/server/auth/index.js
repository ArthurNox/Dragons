export const authSingIn = (email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (email === 'dragao@admin.com' && password === '12345') {
        resolve({
          data: {
            token: 'asdfsdfDSADrqewrafkaçspodiuqlçwẽkrjç.qebfgeasSADnmvb',
            user: {
              name: 'User',
              email: 'dragao@admin.com',
            },
          },
        });
      } else {
        resolve({
          data: {
            error: 'Credentials fails.',
          },
        });
      }
    }, 1000);
  });
};