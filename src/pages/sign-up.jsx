import React, { useState } from 'react';
import { auth } from '../firebase'; // Import Firebase auth
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Notification from '../components/Notification'; // Import the Notification component

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessageType('success');
            setMessage('User signed up successfully');
            window.location.href = '/dashboard'; // Redirect to dashboard after sign-up
        } catch (error) {
            setMessageType('error');
            setMessage(error.message);
        }
    };

    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            setMessageType('success');
            setMessage('User signed up with Google successfully');
            window.location.href = '/dashboard'; // Redirect to dashboard after Google sign-up
        } catch (error) {
            setMessageType('error');
            setMessage(error.message);
        }
    };

    return (
        <>
            <Notification message={message} type={messageType} onClose={() => setMessage('')} />
            <div className="first_section"></div>
            <section className="signup_page">
                <div className="signup_frame">
                    <div className="signup_container">
                        <div className="signup_title">
                            <h1>Sign Up</h1>
                            <p>Create your account</p>
                        </div>
                        <form onSubmit={handleSignUp} className="signup_fields">
                            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit">Continue</button>
                        </form>
                        <p className='or_between_buttons'>or</p>
                        <button onClick={handleGoogleSignUp} className='google_signip_button'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="24px"
                                    height="24px"
                                    className='google-logo'
                                >
                                    <path
                                    fill="#4285F4"
                                    d="M46.1 24.5c0-1.6-.1-3.1-.4-4.6H24v9.1h12.4c-.5 2.5-2 4.6-4.3 6L39 39c3.5-3.3 5.6-8.1 5.6-13.5z"
                                    />
                                    <path
                                    fill="#34A853"
                                    d="M24 48c6.5 0 11.9-2.2 15.8-5.9l-7.4-6c-2.1 1.4-4.8 2.2-8.4 2.2-6.4 0-11.8-4.3-13.7-10.1H3.3v6.3C7.3 43.2 15.1 48 24 48z"
                                    />
                                    <path
                                    fill="#FBBC05"
                                    d="M10.3 28.2c-.5-1.4-.8-2.8-.8-4.2s.3-2.9.8-4.2V13.5H3.3C1.2 18.2 0 22.8 0 27.5s1.2 9.3 3.3 14l7-6.3z"
                                    />
                                    <path
                                    fill="#EA4335"
                                    d="M24 9.5c3.6 0 6.8 1.2 9.3 3.7l6.9-6.9C33.9 2.5 29.5 0 24 0 15.1 0 7.3 4.8 3.3 13.5l7 6.3c1.9-5.8 7.3-10.1 13.7-10.1z"
                                    />
                                </svg>
                            Sign Up with Google</button>
                        <div className="signup_line"></div>
                        <div className="signup_container_bottom">
                            <p>Already have an account?</p>
                            <button onClick={() => window.location.href = '/sign-in'}>Sign In</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;
