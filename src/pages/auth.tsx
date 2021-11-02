import AuthInput from '../components/auth/AuthInput';
import { useState } from 'react';

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <div>
      <h1>Auth</h1>
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
    </div>
  );
}
