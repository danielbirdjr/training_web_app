// src/pages/_app.js
import React from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css'; // Import global styles
import '../styles/variables.css'; // Import CSS variables
import '../styles/reset.css'; // Import CSS reset
import Layout from '../app/layout'; // Default layout
import AuthenticatedLayout from '../app/AuthenticatedLayout'; // Authenticated layout
import PublicNavBar from '../components/PublicNavBar'; // Import Public Navbar
import { AuthProvider, useAuth } from '../context/AuthContext'; // Import Auth Context
import '../styles/notifications.css'; // Import the notification styles

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Define public routes
  const publicRoutes = ['/', '/about', '/pricing', '/sign-in', '/sign-up'];

  // Check if the current route is a public route
  const isPublicRoute = publicRoutes.includes(router.pathname);

  return (
    <AuthProvider>
      {isPublicRoute ? (
        <>
          <PublicNavBar />
          <Component {...pageProps} />
        </>
      ) : (
        <AuthConsumer Component={Component} pageProps={pageProps} />
      )}
    </AuthProvider>
  );
}

function AuthConsumer({ Component, pageProps }) {
  const { isAuthenticated } = useAuth(); // Get authentication state from AuthContext

  return isAuthenticated ? (
    <AuthenticatedLayout>
      <Component {...pageProps} />
    </AuthenticatedLayout>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
