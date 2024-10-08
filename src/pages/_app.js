import React from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../styles/notifications.css';
import Layout from '../app/layout';
import AuthenticatedLayout from '../app/AuthenticatedLayout';
import PublicNavBar from '../components/PublicNavBar';
import { AuthProvider, useAuth } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Define public routes
  const publicRoutes = ['/', '/about', '/pricing', '/sign-in', '/sign-up'];

  // Check if the current route is a public route
  const isPublicRoute = publicRoutes.includes(router.pathname);

  return (
    <AuthProvider>
      {isPublicRoute ? (
        <div className='public-view'>
          <PublicNavBar />
          <Component {...pageProps} />
        </div>
      ) : (
        <AuthConsumer Component={Component} pageProps={pageProps} />
      )}
    </AuthProvider>
  );
}

function AuthConsumer({ Component, pageProps }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === undefined) return null; // Ensure loading state is handled properly

  return isAuthenticated ? (
    <AuthenticatedLayout>
      <Component {...pageProps} />
    </AuthenticatedLayout>
  ) : (
    <>
      <PublicNavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
