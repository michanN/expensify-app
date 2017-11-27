import { firebase, googleAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const startLoginWithGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLoginWithGithub = () => {
  return () => {
    return firebase.auth().signInWithPopup(githubAuthProvider)
      .catch(((error) => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          const pendingCred = error.credential;
          const { email } = error;
          firebase.auth().fetchProvidersForEmail(email).then((providers) => {
            if (providers[0] === 'google.com') {
              firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
                firebase.auth().currentUser.linkWithCredential(pendingCred);
              });
            }
          });
        }
      }));
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const login = (uid, displayName) => ({
  type: 'LOGIN',
  uid,
  displayName: displayName.substr(0, displayName.indexOf(' '))
});

export const logout = () => ({
  type: 'LOGOUT'
});
