import React, { useState } from 'react';
import { auth } from '../firebase'; // Import Firebase auth
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Notification from '../components/Notification'; 

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessageType('success');
            setMessage('User signed in successfully');
            window.location.href = '/dashboard'; // Redirect to dashboard after sign-in
        } catch (error) {
            setMessageType('error');
            setMessage(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            setMessageType('success');
            setMessage('User signed in with Google successfully');
            window.location.href = '/dashboard'; // Redirect to dashboard after Google sign-in
        } catch (error) {
            setMessageType('error');
            setMessage(error.message);
        }
    };

    return (
        <>
            <Notification message={message} type={messageType} onClose={() => setMessage('')} />
            <div className="first_section"></div>
            <section className="signin_page">
                <div className="signin_frame">
                    <div className="signin_container">
                        <div className="signin_title">
                            <h1>Sign In</h1>
                            <p>Sign in to access your account</p>
                        </div>
                        <form onSubmit={handleSignIn} className="signin_fields">
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit">Sign In</button>
                        </form>
                        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
                        <div className="forgot_password_container">
                            <p><a href="/forgot-password.html">Forgot password?</a></p>
                        </div>
                        <div className="line"></div>
                        <div className="signup_container_bottom">
                            <p>Don&apost have an account yet?</p>
                            <button onClick={() => window.location.href='/sign-up'}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignIn;
