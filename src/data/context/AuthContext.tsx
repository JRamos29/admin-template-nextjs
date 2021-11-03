import router from 'next/router';
import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import firebase from '../../firebase/config';
import User from '../../model/User';

interface AuthContextProps {
  user?: User;
  loading?: boolean;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>(null);

interface AuthProviderProps {
  children: any;
}

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();

  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imageUrl: firebaseUser.photoURL,
  };
}

function manageCookie(isLogged: boolean) {
  if (isLogged) {
    Cookies.set('admin-template-nextjs-auth', isLogged, {
      expires: 7,
    });
  } else {
    Cookies.remove('admin-template-nextjs-auth');
  }
}

export function AuthProvider(props: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  async function configSession(firebaseUser) {
    if (firebaseUser?.email) {
      const user = await normalizedUser(firebaseUser);
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return firebaseUser.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-nextjs-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configSession);
      return () => cancel();
    } else {
      setLoading(false);
    }
  }, []);

  async function loginGoogle() {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      configSession(resp.user);
      router.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSession(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginGoogle, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
