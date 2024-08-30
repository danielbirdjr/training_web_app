import React from 'react';
import '../styles/globals.css'; // Import global styles
import '../styles/variables.css'; // Import CSS variables
import '../styles/reset.css'; // Import CSS reset
import Layout from '../app/layout'; // Default layout
import AuthenticatedLayout from '../app/AuthenticatedLayout'; // Authenticated layout
import { AuthProvider, useAuth } from '../context/AuthContext'; // Import Auth Context
import '../styles/notifications.css'; // Import the notification styles


function MyApp({ Component, pageProps }) {
  // AuthProvider must wrap the useAuth hook to work properly
  return (
    <AuthProvider>
      <AuthConsumer Component={Component} pageProps={pageProps} />
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
