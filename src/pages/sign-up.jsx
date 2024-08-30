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
                        <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
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
