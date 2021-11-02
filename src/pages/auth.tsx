import AuthInput from '../components/auth/AuthInput';
import { useState } from 'react';

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function submit() {
    if (mode === 'login') {
      console.log('login');
    } else {
      console.log('signup');
    }
  }

  return (
    <div className={`flex flex-col h-screen items-center justify-center`}>
      <div className={`w-1/2`}>
        <h1
          className={`
        text-xl font-bold mb-5
      `}
        >
          {mode === 'login'
            ? 'Login to access your account'
            : 'Sign-up to create an account'}
        </h1>
        <AuthInput
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
        />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          required
        />
        <AuthInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          required
          shouldNotRender={mode === 'login'}
        />
        <button
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
          onClick={submit}
        >
          {mode === 'login' ? 'Login' : 'Sign-Up'}
        </button>
        <hr className={`my-6 border-gray-300 w-full`} />
        <button
          className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}
          onClick={submit}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
