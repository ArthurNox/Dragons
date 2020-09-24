export const authSingIn = (email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (email === 'admin@admin.com' && password === '1234') {
        resolve({
          data: {
            token: 'asdfsdfsdfqrqewrafkaçlçak.aspodiuqlçwẽkrjç.qebfgeasgucnmvb',
            user: {
              name: 'User',
              email: 'admin@admin.com',
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