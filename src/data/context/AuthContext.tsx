import router from 'next/router';
import { useState } from 'react';
import { createContext } from 'react';
import firebase from '../../firebase/config';
import User from '../../model/User';

interface AuthContextProps {
  user: User;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

interface AuthProviderProps {
  children: any;
}

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();

  return {
    uid: firebaseUser.uid,
    name: firebaseUser.name,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imageUrl: firebaseUser.imageUrl,
  };
}

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);

  async function loginGoogle() {
    console.log('Login google');
    router.push('/');
  }

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
