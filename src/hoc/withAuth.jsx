import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext'; // Import the Auth context

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { isAuthenticated } = useAuth(); // Check authentication status
    const router = useRouter();

    useEffect(() => {
      console.log("Authentication status:", isAuthenticated); // Log the state for debugging
      if (isAuthenticated === false) {
        // Redirect to sign-in page if not authenticated
        router.push('/sign-in');
      }
    }, [isAuthenticated, router]);

    // If loading (isAuthenticated is undefined), show a loading state
    if (isAuthenticated === undefined) {
      return <div>Loading...</div>; // Or a proper loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
