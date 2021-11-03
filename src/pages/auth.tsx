import AuthInput from '../components/auth/AuthInput';
import { useState } from 'react';
import { IconWarning } from '../components/icons/index';

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [error, setError] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function submit() {
    if (mode === 'login') {
      console.log('login');
      showError('Login Error');
    } else {
      console.log('signup');
      showError('Sign-Up Error');
    }
  }

  function showError(message, seconds = 5) {
    setError(message);
    setTimeout(() => setError(null), seconds * 1000);
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={`hidden  md:block md:w-1/2 lg:w-2/3`}>
        <img
          src="https://source.unsplash.com/random"
          alt="Auth Screen Image"
          className={`h-screen w-full object-cover`}
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === 'login'
            ? 'Login to access your account'
            : 'Sign-up to create an account'}
        </h1>
        {error ? (
          <div
            className={`
          flex items-center
          bg-red-400 text-white py-3 px-5 my-2
          border border-red-700 rounded-lg
        `}
          >
            {IconWarning()}
            <span className={`ml-3`}>{error}</span>
          </div>
        ) : (
          false
        )}

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

        {mode === 'login' ? (
          <p className={`mt-8`}>
            Still not a member?
            <a
              onClick={() => setMode('signup')}
              className={`text-blue-500 hover:text-gray-700 font-semibold cursor-pointer`}
            >
              Create an account
            </a>
          </p>
        ) : (
          <p className={`mt-8`}>
            Already a member?
            <a
              onClick={() => setMode('login')}
              className={`text-blue-500 hover:text-gray-700 font-semibold cursor-pointer`}
            >
              Login into you account
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
