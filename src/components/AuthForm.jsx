import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'

  const handleAuth = async () => {
    if (authMode === 'signup') {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('User signed up successfully');
        window.location.href = '/dashboard'; // Redirect to dashboard
      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('User logged in successfully');
        window.location.href = '/dashboard'; // Redirect to dashboard
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('User signed in with Google successfully');
      window.location.href = '/dashboard'; // Redirect to dashboard
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>{authMode === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleAuth}>{authMode === 'signup' ? 'Sign Up' : 'Sign In'}</button>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <p onClick={() => setAuthMode(authMode === 'signup' ? 'signin' : 'signup')}>
        {authMode === 'signup' ? 'Already have an account? Sign In' : 'New user? Sign Up'}
      </p>
    </div>
  );
};

export default AuthForm;
